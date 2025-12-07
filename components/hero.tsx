"use client"

import { Mail, Phone, MapPin, Linkedin, Github, Download, ChevronDown } from "lucide-react"
import { Navigation } from "./navigation"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
      {/* Left side - All content */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up">
          <a href="/" className="hover:text-primary transition-colors">
            Jeevitha S
          </a>
        </h1>

        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl animate-fade-in-up delay-100 text-gradient-animate">
          Data Analyst
        </h2>

        <p className="mt-4 max-w-xs leading-normal text-muted-foreground animate-fade-in-up delay-200">
          Transforming raw data into powerful business insights. Passionate about uncovering hidden patterns and driving
          data-driven decisions.
        </p>

        <div className="mt-6 flex flex-wrap gap-4 text-sm animate-fade-in-up delay-300">
          <div className="flex items-center gap-2 rounded-lg bg-card px-3 py-2 border border-border hover-lift">
            <span className="text-foreground font-medium">5+ Certifications</span>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 flex flex-col gap-2 text-sm text-muted-foreground animate-fade-in-up delay-400">
          <a
            href="mailto:jeevithareddy1244@gmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors group"
          >
            <Mail className="h-4 w-4 group-hover:animate-bounce-subtle" />
            jeevithareddy1244@gmail.com
          </a>
          <a href="tel:+918296849449" className="flex items-center gap-2 hover:text-primary transition-colors group">
            <Phone className="h-4 w-4 group-hover:animate-bounce-subtle" />
            +91 8296849449
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Bangalore, Karnataka
          </span>
        </div>

        {/* Resume Download Button */}
        <div className="mt-6 animate-fade-in-up delay-500">
          <Button asChild className="gap-2 hover-lift">
            <a href="#contact">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="animate-fade-in-left delay-600">
          <Navigation />
        </div>

        {/* Social Links */}
        <ul className="ml-1 mt-8 flex items-center gap-5 animate-fade-in-up delay-700" aria-label="Social media">
          <li>
            <a
              href="https://www.linkedin.com/in/jeevitha-s-948b60266"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </li>
        </ul>

        <div className="mt-12 hidden lg:flex items-center gap-2 text-muted-foreground animate-fade-in-up delay-800">
          <ChevronDown className="h-4 w-4 animate-bounce" />
          <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
        </div>
      </div>

      <div className="relative h-48 w-48 flex-shrink-0 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-xl lg:mt-0 mt-4 order-first lg:order-last animate-fade-in-right delay-300 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
        <Image
          src="/images/profile.jpg"
          alt="Jeevitha S"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>
    </div>
  )
}
