"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { AuroraText } from "@/components/ui/aurora-text"
import { Sun, Moon, Palette } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [showNavText, setShowNavText] = useState(false)

  // Theme state
  type Theme = "light" | "dark" | "colorful"
  const [theme, setTheme] = useState<Theme>("dark")

  // Get default theme from local storage
  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark"
    setTheme(savedTheme)
  }, [])

  // Update theme
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove("light", "colorful")
    if (theme === "light") root.classList.add("light")
    if (theme === "colorful") root.classList.add("colorful")
    localStorage.setItem("theme", theme)
  }, [theme])

  const cycleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : prev === "dark" ? "colorful" : "light"))
  }
  
  const navFields = [
    {
      name: "About Me",
      href: "#about-me"
    },
    {
      name: "Projects",
      href: "#projects"
    },
    {
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Resume",
      href: "#resume"
    },
    {
      name: "Contact",
      href: "#contact"
    },
    {
      name: "More",
      href: "/photography"
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Only transparent when exactly at the top
      setIsAtTop(scrollTop === 0)
      // Show navbar text after scrolling more (to allow for the transition animation)
      setShowNavText(scrollTop > 150)
    }

    // Set initial state
    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isAtTop 
          ? 'bg-transparent' 
          : 'bg-black/95 backdrop-blur-sm border-b border-gray-800 shadow-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Name with smooth transition */}
          <Link to="/" className="flex flex-col text-4xl">
            <span 
              className={`text-2xl text-white font-black transition-all duration-700 ease-out ${
                showNavText 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform -translate-y-4'
              }`}
            >
              <span
                className="text-4xl cursor-pointer"
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Rahul <AuroraText>Vikram</AuroraText>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navFields.map((field, index) => (
              <Link
                to={field.href}
                key={field.name}
                onClick={e => {
                  e.preventDefault();
                  if (field.name === "More") {
                    window.location.href = field.href;
                    return;
                  }
                  const section = document.querySelector(field.href);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={`transition-all duration-500 ease-out ${
                  showNavText 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-4'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <span className="text-white font-semibold hover:text-blue-200 transition-colors">
                  {field.name}
                </span>
              </Link>
            ))}
            <button
              onClick={cycleTheme}
              title={`Switch theme (${theme})`}
              aria-label="Switch theme"
              className={`p-2 rounded-md text-white hover:bg-white/10 transition-colors transition-all duration-500 outline-none focus:outline-none focus:ring-0 ${
                showNavText 
                  ? 'opacity-100 ease-out transform translate-y-0' 
                  : 'opacity-0 ease-in transform translate-y-4'
              }`}
              style={{ transitionDelay: `${200 + navFields.length * 100}ms` }}
            >
              {theme === "light" ? (
                <Sun className="w-5 h-5" />
              ) : theme === "dark" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Palette className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`md:hidden py-4 border-t border-gray-600 ${
            isAtTop ? 'bg-black/80 backdrop-blur-sm' : 'bg-black/95'
          }`}>
            <div className="flex flex-col gap-4">
              {navFields.map((field, index) => (
                <Link
                  key={field.name}
                  to={field.href}
                  className={`text-sm text-white hover:text-gray-300 transition-all duration-300 ease-out ${
                    showNavText 
                      ? 'opacity-100 transform translate-x-0' 
                      : 'opacity-0 transform -translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    const section = document.querySelector(field.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {field.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}