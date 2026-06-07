import Aimg from "../assets/Aboutimg.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Award } from "lucide-react";

const courseworkList = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Operating Systems",
  "Machine Learning",
  "Computer Networks",
  "Database Management Systems",
];

const certificationsList = [
  {
    title: "NPTEL – Introduction to Machine Learning",
    description: "Covered supervised/unsupervised learning, regression, decision trees, clustering, and model evaluation.",
  },
  {
    title: "CodeTantra – Python Programming",
    description: "Completed Python fundamentals: loops, functions, data structures, and Object-Oriented Programming (OOP).",
  },
];

const About = () => {
  return (
    <div className="py-16 md:py-24 px-4 container mx-auto 2xl:max-w-[1400px]">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight inline-block section-heading">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column - Bio & Profile Image */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative group max-w-md mx-auto lg:mx-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative border border-border bg-card overflow-hidden rounded-2xl shadow-md transition-all duration-300 hover:shadow-lg">
              <img
                src={Aimg}
                alt="About Mohammad Shouqat Azeez"
                className="w-full h-auto object-cover max-h-[300px] md:max-h-[350px]"
              />
            </div>
          </div>

          <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Hello, I'm <span className="font-bold text-foreground">Mohammad Shouqat Azeez</span>, 
              a passionate software developer pursuing a B.Tech in Computer Science Engineering (2022–2026).
            </p>
            <p>
              I love building functional, clean, and responsive interfaces that solve user needs. 
              My coding journey focuses on creating modern frontend systems with React, Tailwind CSS, 
              and Shadcn UI, as well as developing robust backends using FastAPI and SQL-based databases.
            </p>
            <p>
              I enjoy translating complex product criteria into performant code. I am always excited to learn 
              new architectures, solve algorithmic problems, and refine my engineering processes.
            </p>
          </div>
        </div>

        {/* Right Column - Education, Coursework, Certifications */}
        <div className="lg:col-span-7 space-y-6">
          {/* Education Card */}
          <Card className="border-border/60 bg-card/60 backdrop-blur-xs hover:border-blue-500/20 transition-all duration-300">
            <CardHeader className="pb-3 flex flex-row items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Education</CardTitle>
                <CardDescription>Academic Background</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 border-l-2 border-muted pl-4">
                <h4 className="font-bold text-foreground text-base md:text-lg">
                  Kallam Haranadhareddy Institute of Technology
                </h4>
                <p className="text-sm text-muted-foreground font-medium">
                  Bachelor of Technology — Computer Science Engineering
                </p>
                <div className="flex justify-between items-center text-xs text-muted-foreground pt-1">
                  <span>Andhra Pradesh, India</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">2022 – 2026</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Relevant Coursework Card */}
          <Card className="border-border/60 bg-card/60 backdrop-blur-xs hover:border-blue-500/20 transition-all duration-300">
            <CardHeader className="pb-3 flex flex-row items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Relevant Coursework</CardTitle>
                <CardDescription>Core CSE Subjects</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {courseworkList.map((course) => (
                  <Badge
                    key={course}
                    variant="secondary"
                    className="px-3 py-1 text-sm bg-muted text-foreground border border-border/30 hover:border-blue-500/30 transition-all"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card className="border-border/60 bg-card/60 backdrop-blur-xs hover:border-blue-500/20 transition-all duration-300">
            <CardHeader className="pb-3 flex flex-row items-center gap-3">
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-xl">Certifications</CardTitle>
                <CardDescription>Industry & Academic Recognition</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {certificationsList.map((cert) => (
                <div key={cert.title} className="space-y-1">
                  <h4 className="font-bold text-foreground text-sm md:text-base flex items-start gap-1">
                    <span className="text-blue-500 mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"></span>
                    {cert.title}
                  </h4>
                  <p className="text-xs md:text-sm text-muted-foreground pl-3.5 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
