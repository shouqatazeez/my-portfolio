import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { ArrowUp, Mail, Heart } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white">
      <div className="container mx-auto px-4 py-12 2xl:max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">&lt;/Shouqat&gt;</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Frontend Developer passionate about creating beautiful,
              responsive, and user-friendly web experiences.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-wrap gap-4">
              <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">About</a>
              <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Skills</a>
              <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Contact</a>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Let's Connect</h4>
            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/shouqatazeez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-blue-600/30 transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href="https://x.com/shouqatazeez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-sky-500/30 transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-lg" />
              </a>
              <a
                href="https://www.instagram.com/__shouqat__/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-pink-500/30 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="mailto:mdshouqatazeez@gmail.com"
                className="p-2 rounded-lg bg-white/10 hover:bg-green-500/30 transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm flex items-center gap-1">
              © {currentYear} Mohammad Shouqat Azeez. Built with{" "}
              <Heart className="h-4 w-4 text-red-500 fill-red-500 inline" />{" "}
              using React & Tailwind CSS
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/shouqatazeez/my-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
              >
                <FaGithub />
                View Source
              </a>
              <button
                onClick={scrollToTop}
                className="p-2 rounded-full bg-blue-600 hover:bg-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-blue-600/30"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
