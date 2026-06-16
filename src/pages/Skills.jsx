

const primarySkills = [
{
category: "FRONTEND",
skills: [
"JavaScript",
"React.js",
"Tailwind CSS",
"React Router",
"shadcn/ui",
"Framer Motion",
"Recharts",
],
},
{
category: "BACKEND",
skills: [
"Python",
"FastAPI",
"SQLAlchemy",
"JWT Authentication",
"REST API Design",
"Google Gemini AI",
],
},
{
category: "DATABASES",
skills: [
"PostgreSQL",
"Neon",
"Firebase",
"Supabase",
"Cloudinary",
],
},
{
category: "TOOLS",
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

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
