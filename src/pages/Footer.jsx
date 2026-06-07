import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-6">
      <div className="container mx-auto px-4 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Mohammad Shouqat Azeez
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shouqatazeez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
