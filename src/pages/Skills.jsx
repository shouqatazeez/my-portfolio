const primarySkills = [
  {
    category: "LANGUAGES",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
      "Java",
      "C",
    ],
  },
  {
    category: "FRONTEND",
    skills: [
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Framer Motion",
      "Recharts",
    ],
  },
  {
    category: "BACKEND",
    skills: [
      "Next.js API Routes",
      "FastAPI",
      "Prisma",
      "SQLAlchemy",
      "JWT Authentication",
    ],
  },
  {
    category: "DATABASES & STORAGE",
    skills: [
      "PostgreSQL",
      "Neon",
      "Supabase",
      "Firebase",
      "Cloudinary",
    ],
  },
  {
    category: "TOOLS & PLATFORMS",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Vercel",
      "VS Code",
    ],
  },
];

const Skills = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold tracking-tight text-foreground">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {primarySkills.map((group) => (
          <div key={group.category} className="space-y-4">
            <h3 className="text-xs font-bold text-muted-foreground tracking-widest">
              {group.category}
            </h3>
            <div className="flex flex-col gap-2.5">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 text-sm font-medium text-foreground bg-muted/50 border border-border rounded-lg w-fit"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
