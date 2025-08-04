import hero from "../assets/Heroimg.png";
import { FaXTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa6";

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-primary/10 absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl" />
      <div className="bg-primary/5 absolute -right-32 -bottom-32 h-96 w-96 rounded-full blur-3xl" />

      <div className="relative container mx-auto grid grid-cols-1 items-center gap-8 px-4 py-16 md:grid-cols-5 md:gap-12 md:py-20 lg:py-24 xl:gap-16 2xl:max-w-[1400px]">
        <div className="flex flex-col justify-center md:col-span-3 md:pr-6 xl:pr-12">
          <div className="space-y-6 md:space-y-8">
            <div className="flex items-center space-x-3">
              <span className="text-primary text-base">•</span>

              <h2 className="text-primary text-sm font-semibold tracking-wider uppercase flex items-center space-x-2">
                <span>Frontend Developer</span>
                <span className="text-base">•</span>
                <span>Building with React & Tailwind</span>
              </h2>
            </div>

            <h1 className="scroll-m-20 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
              <span className="block">Hi, I'm Mohammad Shouqat Azeez</span>
              <span className="text-primary mt-1 block">
                Frontend Web Developer
              </span>
            </h1>

            <p className="text-muted-foreground max-w-xl text-lg">
              I'm a frontend developer focused on building clean, responsive,
              and user-friendly web experiences. I love working with React and
              Tailwind CSS to bring ideas to life. Currently pursuing my B.Tech
              in Computer Science.
            </p>

            <div className="pt-2">
              <p className="mb-3 text-sm font-medium">
                ACTIVELY LOOKING FOR OPPORTUNITIES
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <div className="text-muted-foreground/70 hover:text-foreground font-semibold transition-colors">
                  Internship
                </div>
                <div className="text-muted-foreground/70 hover:text-foreground font-semibold transition-colors">
                  Freelance Projects
                </div>
                <div className="text-muted-foreground/70 hover:text-foreground font-semibold transition-colors">
                  Remote Roles
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-5 mt-4 text-3xl">
              <a
                href="https://github.com/shouqatazeez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/shouqat-azeez-mohammad/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/shouqatazeez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/__shouqat__/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="relative flex aspect-[4/5] w-full items-center justify-center md:col-span-2 md:h-[600px]">
          <div className="border-primary/20 bg-background/50 absolute -top-6 -right-6 h-20 w-20 rounded-md border backdrop-blur-sm" />

          <div className="border-muted/30 bg-muted/10 relative z-10 h-full w-full overflow-hidden rounded-2xl border shadow-xl">
            <img
              src={hero}
              alt="Developer working"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="border-primary/10 bg-background/50 absolute -bottom-6 -left-6 h-24 w-24 rounded-full border backdrop-blur-sm" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
