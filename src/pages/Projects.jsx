import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "HireTrack",
    subtitle: "AI-Powered Job Tracker",
    description: [
      "Built a full-stack job application tracker using React 19, FastAPI, PostgreSQL, and Google Gemini AI enabling users to manage applications, generate tailored cover letters, and prepare for interviews with AI-driven match scoring and structured feedback.",
      "Engineered secure REST APIs with JWT authentication, bcrypt hashing, and user-scoped database isolation; developed a real-time analytics dashboard with 7-day activity charts, status pipelines, and Google Calendar integration for interview reminders.",
      "Implemented an AI referral message generator that produces personalized Email/DM outreach and LinkedIn connection notes based on the user's resume and target job, along with PDF resume parsing, CSV export, and client-side search using shadcn/ui components.",
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
    subtitle: "Invoice Management System",
    description: [
      "Built a full-stack invoice management system using Next.js 16, TypeScript, Prisma 7, and PostgreSQL with customer/product CRUD, multi-line item invoice creation, automatic GST/tax calculation, discount handling, and CSV export with search/filter by status.",
      "Implemented server-side PDF generation using jsPDF with branded layout, sequential invoice numbering (INV-001), status lifecycle management (UNPAID/PAID/OVERDUE), and integrated Google Gemini AI to generate personalized payment reminder messages with one-click send via WhatsApp and Resend email API.",
      "Engineered multi-tenant data isolation using userId-scoped queries, JWT session management via NextAuth, route-level middleware protection, and a revenue analytics dashboard with status breakdown charts, responsive shadcn/ui components, and dark/light theme support.",
    ],
    tags: [
      "Next.js 16",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Google Gemini AI",
      "Tailwind CSS",
    ],
    liveLink: "https://myinvotrack.vercel.app/",
    githubLink: "https://github.com/shouqatazeez/mini-invoice-app",
  },
  {
    id: 3,
    title: "ReceiptPro",
    subtitle: "Receipt Management Vault",
    description: [
      "Built a receipt management platform using React, Tailwind CSS, and Supabase with image uploads (JPEG/PNG), full CRUD operations, and PostgreSQL filtering by amount, date range, merchant, and custom tags.",
      "Developed receipt detail modal with image preview, inline editing of merchant name, amount, date, category, tags, and notes for quick record management.",
      "Implemented secure authentication with Supabase Auth including email verification, and built a responsive gallery view with grid toggle, search, and category-based filtering.",
    ],
    tags: [
      "React.js",
      "Supabase",
      "Tailwind CSS",
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
                <span className="text-muted-foreground font-normal text-sm ml-2">
                  – {project.subtitle}
                </span>
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
