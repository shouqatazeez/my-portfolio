import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const coreProficiencies = [
  { name: "React.js & Frontend Ecosystem", proficiency: 92 },
  { name: "Tailwind CSS & shadcn/ui", proficiency: 95 },
  { name: "JavaScript (ES6+) / TypeScript", proficiency: 90 },
  { name: "Python Programming", proficiency: 85 },
  { name: "FastAPI & Backend Services", proficiency: 80 },
  { name: "SQL & Relational Databases (PostgreSQL)", proficiency: 82 },
  { name: "Git & Version Control", proficiency: 88 },
  { name: "HTML5 / CSS3", proficiency: 95 },
];

const skillsByCategory = [
  {
    category: "Programming",
    icon: <Code className="h-5 w-5 text-blue-500" />,
    skills: ["JavaScript", "Python", "HTML5/CSS3", "SQL", "Java"],
  },
  {
    category: "Frontend",
    icon: <Layout className="h-5 w-5 text-indigo-500" />,
    skills: [
      "React.js",
      "Tailwind CSS",
      "React Router",
      "shadcn/ui",
      "React Hook Form",
      "Zod",
      "Framer Motion",
      "Recharts",
      "React Bootstrap",
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5 text-emerald-500" />,
    skills: ["FastAPI", "SQLAlchemy", "Pydantic", "JWT Authentication"],
  },
  {
    category: "Databases & Storage",
    icon: <Database className="h-5 w-5 text-amber-500" />,
    skills: [
      "PostgreSQL",
      "SQLite",
      "Firebase Authentication",
      "Firestore",
      "Supabase",
      "Supabase Storage",
      "Cloudinary",
    ],
  },
  {
    category: "Deployment & Cloud",
    icon: <Globe className="h-5 w-5 text-rose-500" />,
    skills: ["Vercel"],
  },
  {
    category: "Tools",
    icon: <Settings className="h-5 w-5 text-purple-500" />,
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "NPM",
      "Postman",
      "Swagger UI",
      "ReDoc",
      "ESLint",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 container mx-auto 2xl:max-w-[1400px]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block section-heading">
          Skills
        </h2>
        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg">
          My technical expertise and toolsets categorized by core competency areas, 
          built on hands-on full-stack development experience.
        </p>
      </div>

      <Tabs defaultValue="categories" className="w-full">
        <div className="flex justify-center mb-10">
          <TabsList className="bg-muted/80 p-1.5 rounded-xl border border-border/40 backdrop-blur-md">
            <TabsTrigger
              value="categories"
              className="px-6 py-2 rounded-lg font-medium text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs"
            >
              Skills By Category
            </TabsTrigger>
            <TabsTrigger
              value="proficiency"
              className="px-6 py-2 rounded-lg font-medium text-sm data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs"
            >
              Core Proficiency
            </TabsTrigger>
          </TabsList>
        </div>

        {/* Categories Tab */}
        <TabsContent value="categories" className="animate-fade-in-up outline-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsByCategory.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl bg-card/60 border border-border/80 hover:border-blue-500/20 hover:shadow-xs transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-muted border border-border/30">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs border border-border/40 bg-muted hover:bg-blue-500/5 hover:border-blue-500/30 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 cursor-default skill-tag"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        {/* Proficiency Tab */}
        <TabsContent value="proficiency" className="animate-fade-in-up outline-none">
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {coreProficiencies.map((skill, index) => (
              <div
                key={skill.name}
                className="p-5 rounded-xl bg-card/60 border border-border/80 hover:border-blue-500/20 hover:shadow-xs transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-foreground">{skill.name}</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress value={skill.proficiency} className="h-2 bg-muted [&>[data-slot='progress-indicator']]:bg-blue-600" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Skills;
