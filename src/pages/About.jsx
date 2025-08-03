// import React from "react";
// import Aimg from "../assets/Aboutimg.png";

// const About = () => {
//   return (
//     <div className=" -mt-15 flex ">
//       <div className=" ml-36 ">
//         <img src={Aimg} className="w-[40rem] h-[60rem]" />
//       </div>
//       <div className="mt-28 ml-32">
//         <h1>About Me</h1>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import Aimg from "../assets/Aboutimg.png";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 px-6 py-12 -mt-40">
      <div className=" hidden md:flex w-full md:w-1/2 justify-center">
        <img
          src={Aimg}
          alt="About Me"
          className="w-[36rem] h-[58rem] rounded-xl shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 ">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm a passionate frontend developer who loves building responsive and
          user-friendly websites using React and Tailwind CSS. I'm always eager
          to learn and grow in the tech world.
        </p>
      </div>
    </div>
  );
};

export default About;
