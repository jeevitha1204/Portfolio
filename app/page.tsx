import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Certifications } from "@/components/certifications"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Spotlight gradient effect */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
        style={{
          background: "radial-gradient(600px at 50% 200px, rgba(94, 234, 212, 0.1), transparent 80%)",
        }}
      />

      <Navigation />

      <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left column - sticky header */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <Hero />
          </header>

          {/* Right column - scrollable content */}
          <div className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Skills />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
