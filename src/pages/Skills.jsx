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
    icon: <Globe className="h-5 w-5" />,
    items: [
      { name: "React.js", icon: <Code /> },
      { name: "Tailwind CSS", icon: <Palette /> },
      { name: "HTML/CSS", icon: <FileCode /> },
      { name: "JavaScript", icon: <FileCode /> },
      { name: "TypeScript", icon: <FileCode /> },
    ],
  },
  {
    category: "Backend",
    icon: <Server className="h-5 w-5" />,
    items: [
      { name: "Node.js", icon: <Server /> },
      { name: "Express.js", icon: <Server /> },
      { name: "Firebase", icon: <Database /> },
      { name: "Supabase", icon: <Database /> },
      { name: "REST API", icon: <Globe /> },
    ],
  },
  {
    category: "Deployment & Tools",
    icon: <Terminal className="h-5 w-5" />,
    items: [
      { name: "Git & GitHub", icon: <Github /> },
      { name: "AWS (Basics)", icon: <Server /> },
      { name: "Netlify", icon: <Globe /> },
      { name: "Vercel", icon: <Globe /> },
      { name: "VS Code", icon: <Terminal /> },
      { name: "Postman", icon: <Terminal /> },
      { name: "Linux (Basics)", icon: <Terminal /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 max-w-screen-xl mx-auto">
      <h2 className="text-5xl font-bold mb-6 text-center">Skills</h2>
      <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
        A quick look at my core technical skills, proficiency levels, and the
        tools I use to build fast, modern web applications.
      </p>
      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="flex justify-center mb-8">
          <TabsTrigger value="technical">Technical Skills</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="technical">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6">
            {technicalSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">
                    {skill.proficiency}%
                  </span>
                </div>
                <Progress value={skill.proficiency} />
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tools">
          <div className="space-y-6">
            {tools.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-2 mb-2">
                  {group.icon}
                  <h3 className="text-lg font-semibold">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((tool) => (
                    <Badge
                      key={tool.name}
                      variant="outline"
                      className={cn(
                        "flex items-center gap-1 px-3 py-1 text-sm border"
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
