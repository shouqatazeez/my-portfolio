import React from "react";
import Aimg from "../assets/Aboutimg.png";

const About = () => {
  return (
    <div className="sm:flex gap-6 items-center max-w-screen-xl mx-auto px-6 py-16 md:py-20 sm:-mt-24  md:-mt-20  lg:-mt-44">
      <div className="hidden md:block md:w-1/2">
        <div className="image object-center text-center">
          <img
            src={Aimg}
            alt="AboutImg"
            className="w-full h-auto max-w-[40rem] max-h-[50rem] object-contain"
          />
        </div>
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="mb-4 font-bold text-3xl sm:text-4xl">About Me</h2>
        <p className="text-gray-700 text-base leading-relaxed">
          Hello, I'm{" "}
          <span className="font-semibold">Mohammad Shouqat Azeez</span>, a
          Computer Science undergraduate currently pursuing my B.Tech
          (2022–2026). I'm a passionate <strong>Frontend Developer</strong> who
          loves building clean, responsive, and interactive web interfaces.
        </p>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          I specialize in modern frontend technologies like{" "}
          <strong>React.js</strong>,<strong> Tailwind CSS</strong>, and{" "}
          <strong>Next.js</strong>. I’ve also worked on full-stack projects
          using tools like <strong>Firebase</strong>,<strong> Supabase</strong>,
          and <strong>MongoDB</strong>, gaining solid experience with real-world
          applications.
        </p>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          I'm continuously learning and growing in areas like
          <strong> Data Structures & Algorithms</strong>,{" "}
          <strong>Machine Learning</strong>, and scalable architecture. Whether
          it's designing beautiful UIs or solving complex logic with JavaScript,
          I enjoy the challenge of turning ideas into live applications.
        </p>
        <p className="mt-4 text-gray-700 text-base leading-relaxed">
          I'm always open to new collaborations and exciting tech projects.
          Let’s connect and build something impactful together!
        </p>
      </div>
    </div>
  );
};

export default About;
