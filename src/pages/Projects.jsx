import ReceiptPro from "../assets/receiptpro.png";
import BookNest from "../assets/BookNest.png";
import Grocerystore from "../assets/Grocerystore.png";
import DeptHub from "../assets/Depthub.png";

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
    category: "Frontend",
    description:
      "An academic notes-sharing platform for the CSE department with authentication and organized subject-wise resources.",
    image: DeptHub,
    tags: [
      "#React.js",
      "#Tailwind CSS",
      "#Firebase",
      "#Supabase",
      "#Education",
    ],
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
    tags: ["#React.js", "#Supabase", "#Tailwind CSS", "#Authentication"],
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
    tags: ["#React.js", "#Firebase", "#React Bootstrap", "#Vercel"],
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
    tags: ["#HTML", "#CSS", "#JavaScript", "#Responsive Design"],
    liveLink: "https://grocery-store-gold.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/grocery-store.git",
  },
];

function Projects() {
  return (
    <div className="pt-4 md:pt-6 pb-16 md:pb-24 lg:scroll">
      <div className="container mx-auto px-4 2xl:max-w-[1400px] ">
        <div className="mb-12 text-center md:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
            Explore my featured projects below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:border-primary/30 overflow-hidden pt-0 transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute top-4 right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="bg-primary/90 text-primary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
              </div>

              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-black mt-2 line-clamp-2">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-muted text-gray-900 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between gap-2">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full bg-gray-950 text-white cursor-pointer">
                    View Project
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button className="w-full flex items-center justify-center  bg-gray-950 text-white cursor-pointer">
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
