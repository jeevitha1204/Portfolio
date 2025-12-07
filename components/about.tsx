"use client"

import { AnimatedSection } from "./animated-section"

export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">About</h2>
      </div>

      <div className="space-y-4 text-muted-foreground">
        <AnimatedSection delay={0}>
          <p className="text-lg">
            I&apos;m a passionate <span className="text-foreground font-semibold">Data Enthusiast</span> who loves
            turning raw data into meaningful insights and building solutions that make an impact.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <p>
            My passion lies in the art of <span className="text-foreground font-medium">data storytelling</span> —
            uncovering hidden patterns, building predictive models, and creating visualizations that communicate
            insights effectively.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p>
            With expertise in <span className="text-primary">Python</span>, <span className="text-primary">SQL</span>,
            <span className="text-primary"> Snowflake</span>, <span className="text-primary">Tableau</span>, and{" "}
            <span className="text-primary">Power BI</span>, I specialize in building end-to-end data pipelines, crafting
            interactive dashboards, and developing machine learning models that solve real-world problems.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={300}>
          <p>
            As a <span className="text-foreground font-medium">Board Member of the Data Analytics Club</span>, I&apos;m
            passionate about sharing knowledge and fostering a data-driven culture. When I&apos;m not analyzing datasets
            or fine-tuning ML models, you&apos;ll find me exploring the latest in AI/ML research or building innovative
            solutions like wellness apps with blockchain integration.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
