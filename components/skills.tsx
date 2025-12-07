import { Badge } from "@/components/ui/badge"
import { Code, Database, BarChart3, Wrench, Users } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "R", "SQL", "C", "Java"],
  },
  {
    title: "Web Technologies",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    title: "Data Analysis & ML",
    icon: BarChart3,
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow"],
  },
  {
    title: "Visualization Tools",
    icon: BarChart3,
    skills: ["Tableau", "Power BI", "Microsoft Excel"],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: ["MySQL", "Snowflake", "AWS", "Firebase"],
  },
  {
    title: "Dev Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Android Studio"],
  },
]

const softSkills = [
  { name: "Analytical Thinking", highlight: true },
  { name: "Problem Solving", highlight: true },
  { name: "Communication", highlight: false },
  { name: "Collaboration", highlight: false },
  { name: "Adaptability", highlight: false },
  { name: "Leadership", highlight: true },
]

export function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Skills</h2>
      </div>

      <div className="space-y-8">
        {/* Technical Skills Grid */}
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-foreground">Technical Arsenal</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="group rounded-lg border border-border bg-card/50 p-4 transition-all hover:border-primary/50 hover:bg-card"
              >
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <category.icon className="h-4 w-4" />
                  </div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
            <Users className="h-4 w-4" />
            Soft Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Badge
                key={skill.name}
                variant="outline"
                className={
                  skill.highlight
                    ? "border-primary/50 text-primary hover:bg-primary/10"
                    : "border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary"
                }
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
