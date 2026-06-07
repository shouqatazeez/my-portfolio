import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-border bg-background px-4">
      <nav className="flex h-12 items-center justify-center gap-6 max-w-3xl mx-auto w-full">
        <div className="md:hidden absolute left-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 text-foreground hover:bg-accent"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-36 p-1 md:hidden bg-background border-border shadow-sm">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      <NavigationMenuLink
                        href={link.href}
                        className="py-1.5 w-full block px-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                      >
                        {link.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>

        <NavigationMenu className="max-md:hidden">
          <NavigationMenuList className="gap-1">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent px-3 py-1.5 rounded-md font-medium transition-all text-xs"
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="h-4 w-px bg-border max-md:hidden" />

        <Button asChild size="sm" className="text-xs font-medium h-7 max-md:absolute max-md:right-4">
          <a
            href="https://drive.google.com/drive/folders/1lznp4RtLdQhR2uyySWXExvXqvlOefZB2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <FileText className="size-3.5" />
            <span>Resume</span>
          </a>
        </Button>
      </nav>
    </header>
  );
}

export default Navbar;
