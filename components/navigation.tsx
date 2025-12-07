"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-6 z-50 rounded-lg bg-card p-2 lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur lg:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop navigation - shown in hero section */}
      <nav className="hidden lg:block">
        <ul className="mt-16 w-max">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`group flex items-center py-3 ${
                  activeSection === item.href.slice(1) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                <span
                  className={`mr-4 h-px transition-all group-hover:w-16 group-hover:bg-foreground ${
                    activeSection === item.href.slice(1) ? "w-16 bg-foreground" : "w-8 bg-muted-foreground"
                  }`}
                />
                <span className="text-xs font-bold uppercase tracking-widest transition-colors group-hover:text-foreground">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
