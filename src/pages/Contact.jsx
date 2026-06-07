import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Contact
      </h2>

      <p className="text-muted-foreground text-sm">
        Feel free to reach out if you'd like to connect or discuss opportunities.
      </p>

      <div className="space-y-3 text-sm">
        <a href="mailto:mdshouqatazeez@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Mail className="size-4" />
          mdshouqatazeez@gmail.com
        </a>
        <a href="tel:+916305755345" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <Phone className="size-4" />
          +91 6305755345
        </a>
        <span className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          Andhra Pradesh, India
        </span>
      </div>

      <div className="flex items-center gap-4 pt-2">
        <a
          href="https://github.com/shouqatazeez"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaGithub className="size-4" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <FaLinkedin className="size-4" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}
