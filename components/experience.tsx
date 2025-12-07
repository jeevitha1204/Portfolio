"use client"

import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "./animated-section"

const experiences = [
  {
    company: "Merck India",
    role: "Analyst Intern",
    location: "Bangalore, India",
    period: "September 2025 - Present",
    type: "Internship",
    skills: ["Python", "SQL", "Snowflake", "Tableau", "Power BI", "Data Analysis", "ETL"],
    isCurrent: true,
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Experience</h2>
      </div>

      <div>
        {experiences.map((exp, index) => (
          <AnimatedSection key={index} delay={100}>
            <div className="group relative rounded-lg border border-primary/30 bg-gradient-to-br from-primary/5 to-transparent p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover-lift">
              {/* Current badge with pulse animation */}
              {exp.isCurrent && (
                <div className="absolute -top-3 right-4">
                  <Badge className="bg-emerald-500 text-white border-0 shadow-lg shadow-emerald-500/30">
                    <span className="mr-1.5 h-2 w-2 rounded-full bg-white animate-pulse inline-block" />
                    Current
                  </Badge>
                </div>
              )}

              <div className="flex items-start gap-4">
                {/* Company logo placeholder with animation */}
                <div className="flex-shrink-0">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                    <Building2 className="h-7 w-7" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      <span className="inline-flex items-center gap-2">
                        {exp.role}
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    </h3>
                    <p className="text-lg font-semibold text-primary">{exp.company}</p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <Badge variant="outline" className="border-muted-foreground/30">
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary/10 text-primary text-xs transition-all hover:scale-105 hover:bg-primary/20"
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
