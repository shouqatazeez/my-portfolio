import hero from "../assets/Heroimg.png";
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-blue-500/5 dark:bg-blue-500/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl animate-pulse" />
      <div className="bg-indigo-500/3 dark:bg-indigo-500/8 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-12 md:py-20 lg:py-24 xl:gap-16 2xl:max-w-[1400px]">
        <div className="flex flex-col justify-center md:col-span-3 md:pr-6 xl:pr-12">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3 animate-fade-in-up">
              <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400 gap-1.5 py-1 px-3 rounded-full transition-colors duration-300">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for opportunities
              </Badge>
            </div>

            <div className="flex items-center space-x-3 animate-fade-in-up delay-100">
              <h2 className="text-sm font-bold tracking-wider uppercase flex flex-wrap items-center gap-2 text-muted-foreground">
                <span>Software Developer</span>
                <span className="text-blue-500">•</span>
                <span>React & FastAPI | PostgreSQL & Supabase</span>
              </h2>
            </div>

            <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl animate-fade-in-up delay-200">
              <span className="block text-foreground">Hi, I'm Mohammad Shouqat Azeez</span>
              <span className="gradient-text mt-2 block">
                Software Developer
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed animate-fade-in-up delay-300">
              I'm a software developer building clean, responsive, and user-friendly web experiences. 
              I specialize in frontend development with React and modern UI libraries like shadcn/ui, 
              while building full-stack solutions using FastAPI, PostgreSQL, and Supabase.
            </p>

            <div className="pt-2 animate-fade-in-up delay-400">
              <p className="mb-3 text-xs font-bold text-muted-foreground tracking-wider uppercase">
                ACTIVELY LOOKING FOR
              </p>
              <div className="flex flex-wrap items-center gap-2.5">
                <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full font-medium transition-all hover:bg-primary/10 hover:text-primary cursor-default border border-border/50 hover:border-primary/20 bg-muted/60 text-foreground">
                  Internship
                </Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full font-medium transition-all hover:bg-primary/10 hover:text-primary cursor-default border border-border/50 hover:border-primary/20 bg-muted/60 text-foreground">
                  Freelance Projects
                </Badge>
                <Badge variant="secondary" className="px-4 py-1.5 text-sm rounded-full font-medium transition-all hover:bg-primary/10 hover:text-primary cursor-default border border-border/50 hover:border-primary/20 bg-muted/60 text-foreground">
                  Remote Roles
                </Badge>
              </div>
            </div>

            <div className="flex items-center space-x-3.5 mt-6 animate-fade-in-up delay-500">
              <Button asChild variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/80 hover:bg-accent text-foreground transition-all hover:-translate-y-1 shadow-xs">
                <a
                  href="https://github.com/shouqatazeez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="size-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/80 hover:bg-accent text-foreground transition-all hover:-translate-y-1 shadow-xs">
                <a
                  href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="size-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/80 hover:bg-accent text-foreground transition-all hover:-translate-y-1 shadow-xs">
                <a
                  href="https://x.com/shouqatazeez"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter className="size-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/80 hover:bg-accent text-foreground transition-all hover:-translate-y-1 shadow-xs">
                <a
                  href="https://www.instagram.com/__shouqat__/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                >
                  <FaInstagram className="size-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full h-11 w-11 border-border/80 hover:bg-accent text-foreground transition-all hover:-translate-y-1 shadow-xs">
                <a
                  href="mailto:mdshouqatazeez@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex aspect-[4/5] w-full items-center justify-center md:col-span-2 md:h-[600px] animate-fade-in-right delay-300">
          <div className="border-blue-200/20 dark:border-blue-500/10 bg-white/30 dark:bg-black/30 absolute -top-6 -right-6 h-20 w-20 rounded-xl border backdrop-blur-xs" />
          <div className="border-border/60 bg-background/20 relative z-10 h-full w-full overflow-hidden rounded-2xl border shadow-2xl shadow-blue-500/5">
            <img
              src={hero}
              alt="Mohammad Shouqat Azeez - Software Developer"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          </div>
          <div className="border-blue-200/10 dark:border-blue-500/5 bg-white/30 dark:bg-black/20 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border backdrop-blur-xs" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
