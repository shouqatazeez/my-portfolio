import hero from "../assets/Heroimg.png";
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-blue-500/5 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl animate-pulse" />
      <div className="bg-indigo-500/3 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-12 md:py-20 lg:py-24 xl:gap-16 2xl:max-w-[1400px]">
        <div className="flex flex-col justify-center md:col-span-3 md:pr-6 xl:pr-12">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
                Available for opportunities
              </span>
            </div>

            <div className="flex items-center space-x-3 animate-fade-in-up delay-100">
              <h2 className="text-sm font-semibold tracking-wider uppercase flex items-center space-x-2 text-gray-600">
                <span>Frontend Developer</span>
                <span className="text-blue-500">•</span>
                <span>React & Tailwind | Exploring Full Stack</span>
              </h2>
            </div>

            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl animate-fade-in-up delay-200">
              <span className="block text-gray-900">Hi, I'm Mohammad Shouqat Azeez</span>
              <span className="gradient-text mt-2 block">
                Frontend Web Developer
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed animate-fade-in-up delay-300">
              I'm a frontend-focused developer building clean, responsive,
              and user-friendly web experiences, while actively exploring
              full stack development.

            </p>

            <div className="pt-2 animate-fade-in-up delay-400">
              <p className="mb-3 text-sm font-semibold text-gray-700 tracking-wide">
                ACTIVELY LOOKING FOR
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 cursor-default">
                  Internship
                </div>
                <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 cursor-default">
                  Freelance Projects
                </div>
                <div className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 cursor-default">
                  Remote Roles
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-6 animate-fade-in-up delay-500">
              <a
                href="https://github.com/shouqatazeez"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon github p-3 rounded-full bg-gray-100 hover:bg-gray-200 text-2xl"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon linkedin p-3 rounded-full bg-gray-100 hover:bg-blue-100 text-2xl"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/shouqatazeez"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon twitter p-3 rounded-full bg-gray-100 hover:bg-sky-100 text-2xl"
                aria-label="Twitter Profile"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/__shouqat__/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram p-3 rounded-full bg-gray-100 hover:bg-pink-100 text-2xl"
                aria-label="Instagram Profile"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:mdshouqatazeez@gmail.com"
                className="social-icon p-3 rounded-full bg-gray-100 hover:bg-green-100 text-2xl"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex aspect-[4/5] w-full items-center justify-center md:col-span-2 md:h-[600px] animate-fade-in-right delay-300">
          <div className="border-blue-200/40 bg-white/50 absolute -top-6 -right-6 h-20 w-20 rounded-xl border backdrop-blur-sm" />
          <div className="border-gray-200/50 bg-white/20 relative z-10 h-full w-full overflow-hidden rounded-2xl border shadow-2xl shadow-blue-500/10">
            <img
              src={hero}
              alt="Mohammad Shouqat Azeez - Frontend Developer"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          <div className="border-blue-200/30 bg-white/50 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border backdrop-blur-sm" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
