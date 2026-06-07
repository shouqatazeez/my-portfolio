import HireTrack from "../assets/hiretrack.png";
import ReceiptPro from "../assets/receiptpro.png";
import Grocerystore from "../assets/Grocerystore.png";
import DeptHub from "../assets/depthub.png";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "HireTrack",
    category: "Full Stack",
    description:
      "A full-stack job application tracker to replace spreadsheets with a centralized search dashboard, featuring real-time analytics and user-specific data isolation.",
    image: HireTrack,
    tags: ["React.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "JWT Auth"],
    liveLink: "https://myhiretrack.vercel.app",
    githubLink: "https://github.com/shouqatazeez/HireTrack",
  },
  {
    id: 2,
    title: "DeptHub",
    category: "Full Stack",
    description:
      "An academic notes-sharing platform for the CSE department with role-based access control and dashboards for Students, Faculty, and Admin.",
    image: DeptHub,
    tags: ["React.js", "Firebase Auth", "Supabase", "Tailwind CSS"],
    liveLink: "https://depthub.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/DeptHub-.git",
  },
  {
    id: 3,
    title: "ReceiptPro",
    category: "Full Stack",
    description:
      "A responsive receipt management app with Supabase authentication, CRUD operations, advanced filtering, and mobile-optimized image previews.",
    image: ReceiptPro,
    tags: ["React.js", "Supabase Auth", "Tailwind CSS", "CRUD"],
    liveLink: "https://receipt-organizer-bice.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/receipt-organizer.git",
  },
  {
    id: 4,
    title: "Grocery Store Website",
    category: "Frontend",
    description:
      "A fully responsive online grocery store built with HTML, CSS, and JavaScript, featuring interactive product sections.",
    image: Grocerystore,
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://grocery-store-gold.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/grocery-store.git",
  },
];

function Projects() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 2xl:max-w-[1400px]">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline-block section-heading">
            Projects
          </h2>
          <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg">
            Explore my featured projects. Each project represents a key milestone in my software development journey.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-10">
            <TabsList className="bg-muted/80 p-1.5 rounded-xl border border-border/40 backdrop-blur-md">
              <TabsTrigger value="all" className="px-6 py-2 rounded-lg font-medium text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs">
                All Projects
              </TabsTrigger>
              <TabsTrigger value="fullstack" className="px-6 py-2 rounded-lg font-medium text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs">
                Full Stack
              </TabsTrigger>
              <TabsTrigger value="frontend" className="px-6 py-2 rounded-lg font-medium text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs">
                Frontend
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="outline-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="fullstack" className="outline-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {projects
                .filter((p) => p.category === "Full Stack")
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="frontend" className="outline-none">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {projects
                .filter((p) => p.category === "Frontend")
                .map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Card
      className="group project-card hover:border-blue-500/30 overflow-hidden pt-0 bg-card/60 backdrop-blur-xs flex flex-col h-full border-border/80 transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden border-b border-border/50 bg-muted/20">
        <img
          src={project.image}
          alt={project.title}
          className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute top-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
          <Badge className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg border-transparent font-semibold">
            {project.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2 flex-grow">
        <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mt-2 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="pb-4 pt-0">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="px-2 py-0.5 text-[11px] font-medium bg-muted text-foreground border border-border/30 hover:border-blue-500/20 transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex gap-3 pt-0 pb-4 mt-auto">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1"
          >
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-xs transition-all duration-300">
              Live Demo
              <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </a>
        )}
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1"
        >
          <Button
            variant="outline"
            className="w-full border-border/80 text-foreground hover:bg-accent transition-all duration-300 font-medium"
          >
            <Github className="mr-1.5 h-3.5 w-3.5" />
            Code
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default Projects;
