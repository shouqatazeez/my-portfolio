import { Mail, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import profileImg from "../assets/Profile.jpg";

function Hero() {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-5">
        <img
          src={profileImg}
          alt="Mohammad Shouqat Azeez"
          className="size-28 md:size-32 rounded-full object-cover border-2 border-border shrink-0"
        />
        <div className="space-y-1">
          <p className="text-sm text-muted-foreground">Hey, I'm Shouqat 👋</p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Full Stack Developer
          </h1>
          <p className="text-sm text-muted-foreground">@shouqatazeez</p>
        </div>
      </div>

      {/* <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
        Building clean, responsive web applications with React and Tailwind CSS on the frontend, 
        FastAPI and PostgreSQL on the backend, and shipping full-stack solutions that solve real problems.
      </p> */}
      <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
  Building scalable full-stack applications with React, FastAPI, and PostgreSQL, integrating AI-powered features, secure APIs, and intuitive user experiences to solve real-world problems.
</p>

      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
        <a href="tel:+916305755345" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Phone className="size-3.5" />
          +91 6305755345
        </a>
        <a href="mailto:mdshouqatazeez@gmail.com" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
          <Mail className="size-3.5" />
          mdshouqatazeez@gmail.com
        </a>
        <span className="flex items-center gap-1.5">
          <MapPin className="size-3.5" />
          Andhra Pradesh, India
        </span>
      </div>

      <div className="pt-1">
        <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 gap-1.5 py-1 px-3 rounded-full">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Actively looking for jobs
        </Badge>
      </div>
    </div>
  );
}

export default Hero;
