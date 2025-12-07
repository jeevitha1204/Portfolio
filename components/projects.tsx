import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Heart, Hospital, Fuel, Activity, Sparkles } from "lucide-react"

const projects = [
  {
    title: "GlowBuddy – Tokenized Wellness App",
    date: "Present (In Progress)",
    role: "Full Stack Developer & Blockchain Engineer",
    description:
      "Building a cross-platform wellness app with Google Fit/Apple Health integration. Users earn ERC-20 HealthCoins redeemable at wellness partners. Features mental health chatbot with Dialogflow and blockchain-based health record storage for data privacy.",
    tools: ["Flutter", "Solidity", "Firebase", "Dialogflow", "MySQL", "Google Fit API", "Blockchain", "Git"],
    icon: Heart,
    featured: true,
  },
  {
    title: "Vital Edge – Hospital Workflow Innovation",
    date: "Jan 2025",
    role: "Full Stack Developer & Data Engineer",
    description:
      "Developed a comprehensive hospital management platform with real-time chatbot appointment booking, role-based authentication for patients/doctors/admins, and Tableau dashboards for resource utilization and staff allocation tracking.",
    tools: ["Python", "MySQL", "HTML", "CSS", "JavaScript", "Tableau"],
    icon: Hospital,
    featured: true,
  },
  {
    title: "Fuel Track Lite – ETL Data Pipeline",
    date: "Oct 2024",
    role: "Data Engineer",
    description:
      "Designed lightweight ETL pipeline for fleet fuel data. Automated CSV ingestion, data cleaning/transformation with Python, and MySQL storage. Built Tableau dashboards revealing fuel efficiency trends and cost anomalies, enabling operational cost reduction.",
    tools: ["Python", "MySQL", "Tableau", "Pandas", "ETL"],
    icon: Fuel,
    featured: false,
  },
  {
    title: "COVID-19 Impact Analysis",
    date: "July 2024",
    role: "Data Analyst",
    description:
      "Analyzed state-level vaccination data to uncover trends and forecast progress. Applied seasonal decomposition for time series analysis, identified correlations between vaccination rates and recovery trends, and generated recommendations for government health officials.",
    tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau"],
    icon: Activity,
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Projects</h2>
      </div>

      <div>
        <ul className="group/list space-y-8">
          {projects.map((project, index) => (
            <li key={index} className="group relative">
              <div
                className={`absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-card lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg ${
                  project.featured ? "lg:border-l-2 lg:border-l-primary/50" : ""
                }`}
              />

              <div className="relative z-10 flex gap-4">
                <div className="mt-1 flex-shrink-0">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-lg text-primary ${
                      project.featured
                        ? "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
                        : "bg-primary/10"
                    }`}
                  >
                    <project.icon className="h-6 w-6" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      <span className="inline-flex items-baseline gap-1">
                        {project.title}
                        <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </h3>
                    {project.featured && (
                      <Badge className="flex-shrink-0 bg-primary/10 text-primary border-primary/30 text-xs">
                        <Sparkles className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{project.role}</p>

                  <p className="mt-1 text-xs text-muted-foreground">{project.date}</p>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tools.map((tool) => (
                      <li key={tool}>
                        <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                          {tool}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
