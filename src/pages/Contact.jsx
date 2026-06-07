import { useState } from "react";
import db from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Copy, Check, Github, Linkedin, Send } from "lucide-react";

export default function ClassicContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mdshouqatazeez@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 pb-12 md:py-20 md:pb-14 2xl:max-w-[1400px]">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline-block section-heading">
          Contact Me
        </h2>
        <p className="text-muted-foreground mt-8 max-w-xl mx-auto text-lg">
          Have a question or want to work together? Feel free to reach out using the form 
          or connect via my social channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
        {/* Left Column - Contact Details Dashboard */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="border-border/60 bg-card/60 backdrop-blur-xs">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Get In Touch</CardTitle>
              <CardDescription>Direct coordinates to reach me</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Email details */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mt-0.5 border border-blue-500/10 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="space-y-1 flex-grow">
                  <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase block">Email</span>
                  <a href="mailto:mdshouqatazeez@gmail.com" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold text-sm md:text-base break-all">
                    mdshouqatazeez@gmail.com
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mt-1 cursor-pointer transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-500" />
                        <span className="text-emerald-500 font-medium">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Phone details */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mt-0.5 border border-blue-500/10 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase block">Phone</span>
                  <a href="tel:+916305755345" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold text-sm md:text-base">
                    +91 63057 55345
                  </a>
                </div>
              </div>

              {/* Location details */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 mt-0.5 border border-blue-500/10 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <span className="text-xs font-bold text-muted-foreground tracking-wider uppercase block">Location</span>
                  <p className="text-foreground font-semibold text-sm md:text-base">
                    Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Profiles Quick Links */}
          <div className="flex justify-center lg:justify-start gap-4 px-2">
            <a
              href="https://github.com/shouqatazeez"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" /> Github
            </a>
            <span className="text-border">|</span>
            <a
              href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-7">
          <Card className="border-border/60 bg-card/60 backdrop-blur-xs">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send Message</CardTitle>
              <CardDescription>Fill out the fields below to send an email</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-muted/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
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
                    className="bg-muted/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Your message details..."
                    required
                    className="resize-none bg-muted/40"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold cursor-pointer shadow-xs transition-all duration-300"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>

                {success && (
                  <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-center">
                    <p className="text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
