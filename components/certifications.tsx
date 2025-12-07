import { Badge } from "@/components/ui/badge"
import { ExternalLink, Award, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Database Management System",
    issuer: "NPTEL",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/30 hover:border-blue-500/50",
    skills: ["SQL", "Database Design", "Normalization", "Query Optimization"],
  },
  {
    title: "Data Science 101",
    issuer: "IBM",
    color: "from-cyan-500/20 to-cyan-500/5",
    borderColor: "border-cyan-500/30 hover:border-cyan-500/50",
    skills: ["Data Science", "Machine Learning", "Data Analysis", "Statistics"],
  },
  {
    title: "Business Intelligence and Analytics",
    issuer: "NPTEL",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/30 hover:border-emerald-500/50",
    skills: ["BI Tools", "Data Visualization", "Reporting", "Analytics"],
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/30 hover:border-amber-500/50",
    skills: ["Python", "ML Algorithms", "Model Training", "Scikit-learn"],
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    color: "from-rose-500/20 to-rose-500/5",
    borderColor: "border-rose-500/30 hover:border-rose-500/50",
    skills: ["Data Analytics", "Statistical Analysis", "Data Interpretation"],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Certifications</h2>
      </div>

      {/* Certification count badge */}
      <div className="mb-6 flex items-center gap-2">
        <Badge variant="outline" className="border-primary/50 text-primary">
          <CheckCircle className="mr-1 h-3 w-3" />
          {certifications.length} Professional Certifications
        </Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className={`group rounded-lg border bg-gradient-to-br ${cert.color} ${cert.borderColor} p-4 transition-all hover:shadow-lg`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-background/50 text-primary backdrop-blur">
                  <Award className="h-5 w-5" />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  <span className="inline-flex items-center gap-1">
                    {cert.title}
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </span>
                </h3>

                <p className="mt-1 text-sm font-medium text-primary">{cert.issuer}</p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-background/50 text-muted-foreground text-xs backdrop-blur"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
