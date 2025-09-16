// import { useState } from "react";
// import db from "../firebase";
// import { collection, addDoc, Timestamp } from "firebase/firestore";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Textarea } from "@/components/ui/textarea";
// import ContactImage from "../assets/contact.png";

// export default function ClassicContactForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await addDoc(collection(db, "contacts"), {
//         ...formData,
//         timestamp: Timestamp.now(),
//       });

//       setSuccess(true);
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       console.error("Error sending message:", error);
//     }
//   };

//   return (
//     <section className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32 2xl:max-w-[1400px]">
//       <div className="mb-12 text-center">
//         <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
//           Contact Me
//         </h2>
//         <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
//           If you'd like to get in touch with me, feel free to reach out using
//           the contact information below or by filling out the contact form.
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row gap-10 items-center">
//         <div className="w-full md:w-[55%]">
//           <img
//             src={ContactImage}
//             alt="Contact Illustration"
//             className="w-full h-auto rounded-xl shadow-md"
//           />
//         </div>

//         <div className="w-full md:w-[45%] lg:w-[40%]">
//           <Card className="border-border/40">
//             <CardContent className="p-4 md:p-6 lg:p-8">
//               <div className="mb-6 space-y-2">
//                 <div>
//                   <Label className="text-sm font-semibold">Email</Label>
//                   <p className="text-muted-foreground text-sm">
//                     mdshouqatazeez@gmail.com
//                   </p>
//                 </div>
//                 <div>
//                   <Label className="text-sm font-semibold">Phone</Label>
//                   <p className="text-muted-foreground text-sm">
//                     +91 63057 55345
//                   </p>
//                 </div>
//               </div>

//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div>
//                   <Label htmlFor="name" className="mb-2 block">
//                     Name
//                   </Label>
//                   <Input
//                     id="name"
//                     name="name"
//                     placeholder="Your name"
//                     required
//                     value={formData.name}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="email" className="mb-2 block">
//                     Email
//                   </Label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     placeholder="Your email address"
//                     required
//                     value={formData.email}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div>
//                   <Label htmlFor="message" className="mb-2 block">
//                     Message
//                   </Label>
//                   <Textarea
//                     id="message"
//                     name="message"
//                     rows={5}
//                     placeholder="Your message"
//                     required
//                     className="resize-none"
//                     value={formData.message}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <Button type="submit" className="w-full cursor-pointer">
//                   Send Message
//                 </Button>

//                 {success && (
//                   <p className="text-green-600 text-sm text-center">
//                     ✅ Message sent successfully!
//                   </p>
//                 )}
//               </form>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useState } from "react";
import db from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ContactImage from "../assets/contact.png";

export default function ClassicContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: Timestamp.now(),
      });

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Auto-hide success message after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32 2xl:max-w-[1400px]">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Me
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-lg">
          If you'd like to get in touch with me, feel free to reach out using
          the contact information below or by filling out the contact form.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-[55%]">
          <img
            src={ContactImage}
            alt="Contact Illustration"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-[45%] lg:w-[40%]">
          <Card className="border-border/40">
            <CardContent className="p-4 md:p-6 lg:p-8">
              <div className="mb-6 space-y-2">
                <div>
                  <Label className="text-sm font-semibold">Email</Label>
                  <p className="text-muted-foreground text-sm">
                    mdshouqatazeez@gmail.com
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-semibold">Phone</Label>
                  <p className="text-muted-foreground text-sm">
                    +91 63057 55345
                  </p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <Label htmlFor="name" className="mb-2 block">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message"
                    required
                    className="resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>

                {success && (
                  <p className="text-green-600 text-sm text-center mt-2">
                    ✅ Message sent successfully!
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
