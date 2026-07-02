import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "HireTrack",
    description: [
      "Built an AI-powered job application tracking platform using React 19, FastAPI, PostgreSQL (Neon), and Google Gemini AI.",
      "Engineered a secure REST API with JWT authentication, bcrypt password hashing, and strict user-scoped database isolation.",
      "Integrated AI-powered resume analysis, job-match scoring, personalized cover letter generation, and interview coaching with detailed feedback.",
      "Built an AI Referral Message Generator that produces personalized Email/DM outreach and LinkedIn connection notes, tailored to the user's resume and target job description.",
      "Developed a real-time analytics dashboard featuring application pipelines, activity tracking, interview scheduling, and Google Calendar integration.",
      "Implemented PDF resume parsing, CSV export, drag-and-drop uploads, and advanced search/filtering for efficient job management.",
    ],
    tags: [
      "React 19",
      "FastAPI",
      "PostgreSQL",
      "Google Gemini AI",
      "JWT Auth",
      "Tailwind CSS",
    ],
    liveLink: "https://myhiretrack.vercel.app",
    githubLink: "https://github.com/shouqatazeez/HireTrack",
  },
  {
    id: 2,
    title: "InvoTrack",
    description: [
      "Built a full-stack multi-tenant invoice management platform using Next.js 16, Prisma 7, and PostgreSQL (Neon).",
      "Implemented dynamic invoice builder with auto-calculated subtotals, configurable tax, and flat discount.",
      "Engineered server-side PDF generation with branded layout, itemized tables, and status badges using jsPDF.",
      "Developed analytics dashboard with revenue tracking, unpaid/overdue amounts, and Recharts visualizations.",
      "Designed a complete REST API (v1) with CRUD for customers, products, and invoices, plus JWT-based multi-tenant data isolation via middleware.",
    ],
    tags: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Tailwind CSS",
    ],
    liveLink: "https://myinvotrack.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/mini-invoice-app",
  },
  {
    id: 3,
    title: "ReceiptPro",
    description: [
      "Built a receipt management platform using React, Tailwind CSS, and Supabase.",
      "Implemented authentication, CRUD operations, and advanced search/filtering capabilities.",
      "Developed receipt inspection tools with metadata editing, image previews, and responsive layouts.",
    ],
    tags: [
      "React.js",
      "Supabase",
      "Tailwind CSS",
      "CRUD",
      "PostgreSQL",
    ],
    liveLink: "https://receipt-organizer-bice.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/receipt-organizer.git",
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
