import { GraduationCap, Award, Trophy } from "lucide-react"

const education = [
  {
    institution: "New Horizon College of Engineering, Bangalore",
    degree: "BE, Computer Science (Data Science)",
    period: "2022 - July 2026",
    isCurrent: true,
  },
  {
    institution: "CMR Pre-University College, Bangalore",
    degree: "Higher Secondary School (PCMB)",
    period: "May 2022",
    isCurrent: false,
  },
]

const achievements = [
  {
    title: "Board Member, Data Analytics Club",
    period: "2024 - 2025",
    description:
      "Spearheading workshops and events to deepen expertise in data analytics and analytical methodologies, while driving continuous learning and skill development across the student community.",
    icon: Trophy,
    highlight: true,
  },
  {
    title: "QuantumX - Robowar Competition",
    period: "Jan 2024 - 2025",
    description:
      "Participated in Robowar, contributing to the design and development of a combat robot. Engaged in strategic problem-solving and hands-on engineering challenges.",
    icon: Award,
    highlight: false,
  },
]

export function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Education</h2>
      </div>

      <div className="space-y-12">
        {/* Education */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
            <GraduationCap className="h-4 w-4" />
            Education
          </h3>

          <div className="relative border-l-2 border-primary/30 pl-6">
            {education.map((edu, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div
                  className={`absolute -left-[29px] h-4 w-4 rounded-full border-2 ${
                    edu.isCurrent
                      ? "border-primary bg-primary shadow-lg shadow-primary/50"
                      : "border-muted-foreground bg-background"
                  }`}
                />

                <div className="group rounded-lg p-4 transition-all hover:bg-card/50">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{edu.degree}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-foreground">
            <Award className="h-4 w-4" />
            Achievements
          </h3>

          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`group rounded-lg border p-5 transition-all hover:shadow-lg ${
                  achievement.highlight
                    ? "border-primary/30 bg-gradient-to-br from-primary/10 to-transparent hover:border-primary/50"
                    : "border-border bg-card/50 hover:border-primary/50 hover:bg-card"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${
                      achievement.highlight ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <achievement.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <span className="text-xs text-muted-foreground">{achievement.period}</span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
