import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "HireTrack",
    description: [
      "A full-stack job application tracker using React.js, FastAPI, and PostgreSQL to replace spreadsheets with a centralized search dashboard.",
      "Implemented secure user registration and login with JWT authentication, password hashing, and user-specific data isolation.",
      "Designed a responsive dashboard using Tailwind CSS and shadcn/ui with real-time analytics, status breakdowns, and search/filtering.",
    ],
    tags: ["React.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "shadcn/ui", "JWT Auth"],
    liveLink: "https://myhiretrack.vercel.app",
    githubLink: "https://github.com/shouqatazeez/HireTrack",
  },
  {
    id: 2,
    title: "DeptHub",
    description: [
      "Built a full-stack academic resource sharing platform using React, Firebase Auth, and Supabase.",
      "Implemented role-based access control with separate dashboards for Students, Faculty, and Admin using protected routes.",
      "Designed a responsive UI using Tailwind CSS with resource upload/download, search functionality, and mobile-optimized layouts.",
    ],
    tags: ["React.js", "Firebase Auth", "Supabase", "Tailwind CSS"],
    liveLink: "https://depthub.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/DeptHub-.git",
  },
  {
    id: 3,
    title: "ReceiptPro",
    description: [
      "Built a responsive receipt management app using React and Tailwind CSS with reusable UI components.",
      "Implemented Supabase Authentication, CRUD operations, and advanced search & filtering.",
      "Added detailed receipt views with image preview, editable notes, and deletion workflow (mobile optimized).",
    ],
    tags: ["React.js", "Supabase Auth", "Tailwind CSS", "CRUD"],
    liveLink: "https://receipt-organizer-bice.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/receipt-organizer.git",
  },
  {
    id: 4,
    title: "Grocery Store Website",
    description: [
      "Designed a responsive grocery store UI using HTML, CSS, and JavaScript.",
      "Built interactive product sections and smooth navigation.",
      "Ensured consistent mobile and desktop layouts with clean frontend structure.",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    liveLink: "https://grocery-store-gold.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/grocery-store.git",
  },
];

function Projects() {
  return (
    <div className="space-y-5">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project) => (
          <div key={project.id} className="space-y-3">
            <div className="flex items-center gap-3 flex-wrap">
              <h3 className="font-semibold text-foreground text-lg">
                {project.title}
              </h3>
              <div className="flex items-center gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="size-4" />
                  </a>
                )}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`${project.title} source code`}
                >
                  <Github className="size-4" />
                </a>
              </div>
            </div>

            <ul className="space-y-1.5 text-muted-foreground text-sm list-disc list-inside">
              {project.description.map((point, i) => (
                <li key={i} className="leading-relaxed">{point}</li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="px-2 py-0.5 text-xs font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
