import ReceiptPro from "../assets/receiptpro.png";
import BookNest from "../assets/BookNest.png";
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

const projects = [
  {
    id: 1,
    title: "DeptHub",
    category: "Full Stack",
    description:
      "An academic notes-sharing platform for the CSE department with authentication and organized subject-wise resources.",
    image: DeptHub,
    tags: ["React.js", "Tailwind CSS", "Firebase", "Supabase", "Education"],
    liveLink: "https://depthub.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/DeptHub-.git",
  },
  {
    id: 2,
    title: "ReceiptPro",
    category: "Full Stack",
    description:
      "A full-stack receipt management app with Supabase, image previews, and secure auth.",
    image: ReceiptPro,
    tags: ["React.js", "Supabase", "Tailwind CSS", "Authentication"],
    liveLink: "https://receipt-organizer-bice.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/receipt-organizer.git",
  },
  {
    id: 3,
    title: "Book Nest",
    category: "Full Stack",
    description:
      "A platform to explore, upload, and manage book listings with Firebase authentication and storage.",
    image: BookNest,
    tags: ["React.js", "Firebase", "React Bootstrap", "Vercel"],
    liveLink: "https://book-nest-hazel.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/book-nest.git",
  },
  {
    id: 4,
    title: "Grocery Store Website",
    category: "Frontend Development",
    description:
      "A fully responsive online grocery store built with HTML, CSS, and JavaScript.",
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
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline-block section-heading">
            Projects
          </h2>
          <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg">
            Explore my featured projects below. Each project represents my
            journey in building real-world applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group project-card hover:border-blue-200 overflow-hidden pt-0 bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute top-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  <span className="inline-flex items-center rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-lg">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2 line-clamp-2 text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="pb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-0 pb-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white cursor-pointer shadow-md hover:shadow-lg transition-all duration-300 btn-primary">
                    View Live
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center border-gray-300 hover:bg-gray-900 hover:text-white hover:border-gray-900 cursor-pointer transition-all duration-300"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
