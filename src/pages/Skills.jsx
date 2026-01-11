import {
  Code,
  Database,
  FileCode,
  Github,
  Globe,
  Palette,
  Server,
  Terminal,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const technicalSkills = [
  { name: "JavaScript", proficiency: 90 },
  { name: "TypeScript", proficiency: 85 },
  { name: "Python", proficiency: 80 },
  { name: "Java", proficiency: 75 },
  { name: "C", proficiency: 70 },
  { name: "HTML/CSS", proficiency: 95 },
  { name: "React.js", proficiency: 90 },
  { name: "Node.js & Express.js", proficiency: 85 },
  { name: "Firebase", proficiency: 80 },
  { name: "Supabase", proficiency: 75 },
];

const tools = [
  {
    category: "Frontend",
    icon: <Globe className="h-5 w-5 text-blue-500" />,
    items: [
      { name: "React.js", icon: <Code className="h-4 w-4" /> },
      { name: "Tailwind CSS", icon: <Palette className="h-4 w-4" /> },
      { name: "HTML/CSS", icon: <FileCode className="h-4 w-4" /> },
      { name: "JavaScript", icon: <FileCode className="h-4 w-4" /> },
      { name: "TypeScript", icon: <FileCode className="h-4 w-4" /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5 text-green-500" />,
    items: [
      { name: "Node.js", icon: <Server className="h-4 w-4" /> },
      { name: "Express.js", icon: <Server className="h-4 w-4" /> },
      { name: "Firebase", icon: <Database className="h-4 w-4" /> },
      { name: "Supabase", icon: <Database className="h-4 w-4" /> },
      { name: "REST API", icon: <Globe className="h-4 w-4" /> },
    ],
  },
  {
    category: "Deployment & Tools",
    icon: <Terminal className="h-5 w-5 text-purple-500" />,
    items: [
      { name: "Git & GitHub", icon: <Github className="h-4 w-4" /> },
      { name: "AWS (Basics)", icon: <Server className="h-4 w-4" /> },
      { name: "Netlify", icon: <Globe className="h-4 w-4" /> },
      { name: "Vercel", icon: <Globe className="h-4 w-4" /> },
      { name: "VS Code", icon: <Terminal className="h-4 w-4" /> },
      { name: "Postman", icon: <Terminal className="h-4 w-4" /> },
      { name: "Linux (Basics)", icon: <Terminal className="h-4 w-4" /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 px-6 max-w-screen-xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 inline-block section-heading">
          Skills
        </h2>
        <p className="text-muted-foreground mx-auto mt-8 max-w-2xl text-lg">
          A quick look at my core technical skills, proficiency levels, and the
          tools I use to build fast, modern web applications.
        </p>
      </div>

      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="flex justify-center mb-10 bg-gray-100/80 p-1.5 rounded-xl">
          <TabsTrigger
            value="technical"
            className="px-6 py-2.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Technical Skills
          </TabsTrigger>
          <TabsTrigger
            value="tools"
            className="px-6 py-2.5 rounded-lg font-medium data-[state=active]:bg-white data-[state=active]:shadow-sm"
          >
            Tools & Platforms
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technical" className="animate-fade-in-up">
          <div className="grid sm:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-white/50 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
                  <span className="text-sm font-medium text-blue-600">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress value={skill.proficiency} className="h-2" />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools" className="animate-fade-in-up">
          <div className="space-y-8">
            {tools.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl bg-white/50 border border-gray-100 hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-gray-100">
                    {group.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tool) => (
                    <Badge
                      key={tool.name}
                      variant="outline"
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 text-sm border-gray-200 bg-white hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-200 cursor-default skill-tag"
                      )}
                    >
                      {tool.icon}
                      {tool.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Skills;
