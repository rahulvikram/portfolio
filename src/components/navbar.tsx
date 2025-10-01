"use client"

import { Link } from "react-router-dom"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navFields = [
    {
      name: "About Me",
      href: "#about-me"
    },
    {
      name: "Work",
      href: "#my-work"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Resume",
      href: "#resume"
    },
    {
      name: "Contact",
      href: "#contact"
    }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-1 border-gray-800" >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl text-white font-black text-foreground">Rahul Vikram</span>
            <span className="text-md" style={{ color: "var(--palette-light-blue)" }}>Software Engineer</span>
          </Link>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navFields.map((field) => (
              <Link
                to={field.href}
                key={field.name}
                onClick={e => {
                  e.preventDefault();
                  const section = document.querySelector(field.href);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <span className="text-white font-semibold hover:text-gray-300 transition-colors">{field.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-foreground" aria-label="Toggle menu">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="#work"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Work
              </Link>
              <Link
                to="#about"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="#contact"
                className="text-sm text-foreground hover:text-muted-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
