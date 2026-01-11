import Aimg from "../assets/Aboutimg.png";

const About = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="sm:flex gap-12 items-center max-w-screen-xl mx-auto px-6">
        <div className="hidden md:block md:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-2xl"></div>
            <img
              src={Aimg}
              alt="About Mohammad Shouqat Azeez"
              className="relative w-full h-auto max-w-[40rem] max-h-[50rem] object-contain"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 inline-block section-heading">
              About Me
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              Hello, I'm{" "}
              <span className="font-bold gradient-text">Mohammad Shouqat Azeez</span>, a
              Computer Science undergraduate currently pursuing my B.Tech
              (2022–2026). I'm a passionate <strong className="text-gray-900">Frontend Developer</strong> who
              loves building clean, responsive, and interactive web interfaces.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I specialize in modern frontend technologies like{" "}
              <strong className="text-gray-900">React.js</strong>, <strong className="text-gray-900">Tailwind CSS</strong>, and{" "}
              <strong className="text-gray-900">Next.js</strong>. I've also worked on full-stack projects
              using tools like <strong className="text-gray-900">Firebase</strong>, <strong className="text-gray-900">Supabase</strong>,
              and <strong className="text-gray-900">MongoDB</strong>, gaining solid experience with real-world
              applications.
            </p>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I'm continuously learning and growing in areas like{" "}
              <strong className="text-gray-900">Data Structures & Algorithms</strong>,{" "}
              <strong className="text-gray-900">Machine Learning</strong>, and scalable architecture. Whether
              it's designing beautiful UIs or solving complex logic with JavaScript,
              I enjoy the challenge of turning ideas into live applications.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
