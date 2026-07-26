"use client"

import { Link } from "react-router-dom"
import { useState, type MouseEvent } from "react"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import Resume from "../assets/Resume.pdf"

const navFields = [
  { name: "About", href: "#about-me" },
  { name: "Work", href: "#my-work" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: Resume, target: "_blank", rel: "noopener noreferrer" },
  { name: "Photography", href: "/photography" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (
    e: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobileMenu = false
  ) => {
    if (closeMobileMenu) {
      setIsOpen(false)
    }

    if (!href.startsWith("#")) {
      return
    }

    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
        <Link
          to="/"
          className="text-sm font-medium tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Rahul Vikram
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {navFields.map((field) => (
              <Link
                key={field.name}
                to={field.href}
                target={field.target}
                rel={field.rel}
                onClick={(e) => handleNavClick(e, field.href)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {field.name}
              </Link>
            ))}
          </div>

          <ThemeToggle />

          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border md:hidden">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 px-6 py-4">
            {navFields.map((field) => (
              <Link
                key={field.name}
                to={field.href}
                target={field.target}
                rel={field.rel}
                onClick={(e) => handleNavClick(e, field.href, true)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {field.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
