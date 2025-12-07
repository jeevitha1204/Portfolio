"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, Linkedin, Github, Phone } from "lucide-react"
import { AnimatedSection } from "./animated-section"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    const mailtoLink = `mailto:jeevithareddy1244@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Contact</h2>
      </div>

      <div className="space-y-8">
        <AnimatedSection>
          <div>
            <h3 className="text-lg font-medium text-foreground">Get In Touch</h3>
            <p className="mt-2 text-muted-foreground">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="flex flex-wrap gap-4">
            {[
              { href: "mailto:jeevithareddy1244@gmail.com", icon: Mail, label: "Email" },
              { href: "tel:+918296849449", icon: Phone, label: "Call" },
              {
                href: "https://www.linkedin.com/in/jeevitha-s-948b60266",
                icon: Linkedin,
                label: "LinkedIn",
                external: true,
              },
              { href: "https://github.com", icon: Github, label: "GitHub", external: true },
            ].map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-4 py-2 text-sm text-muted-foreground transition-all hover:border-primary hover:text-primary hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <link.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                {link.label}
              </a>
            ))}
          </div>
        </AnimatedSection>

        {/* Contact Form with animations */}
        <AnimatedSection delay={200}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-card/50 border-border focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-card/50 border-border focus:border-primary transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-card/50 border-border focus:border-primary resize-none transition-all"
              />
            </div>
            <Button type="submit" className="gap-2 hover-lift group">
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              Send Message
            </Button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  )
}
