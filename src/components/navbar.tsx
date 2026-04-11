"use client"

import { Link } from "react-router-dom"
import { useState, useEffect, type MouseEvent } from "react"
import { Menu, X } from "lucide-react"
import { AuroraText } from "@/components/ui/aurora-text"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import Resume from "../assets/Resume.pdf"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAtTop, setIsAtTop] = useState(true)
  const [showNavText, setShowNavText] = useState(false)

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
      name: "Skills",
      href: "#skills"
    },
    {
      name: "Contact",
      href: "#contact"
    },
    {
      name: "Resume",
      href: Resume,
      target: "_blank",
      rel: "noopener noreferrer"
    },
    {
      name: "Photography",
      href: "/photography",
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
    const section = document.querySelector(href)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <ScrollProgress className="top-[65px] z-50" />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isAtTop && !isOpen
            ? 'bg-transparent' 
            : 'backdrop-blur-sm border-b border-gray-800 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
            {/* Logo/Name with smooth transition */}
            <Link to="/" className="flex flex-col text-2xl">
              <span 
                className={`text-xl text-white font-black transition-all duration-700 ease-out ${
                  showNavText 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform -translate-y-4'
                }`}
              >
                <span
                  className="text-2xl cursor-pointer"
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
                  target={field.target}
                  rel={field.rel}
                  onClick={(e) => handleNavClick(e, field.href)}
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
            </div>

            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className={`md:hidden py-4 border-t border-gray-600 ${
              isAtTop ? 'bg-black/80 backdrop-blur-lg' : 'bg-black/95'
            }`}>
              <div className="flex flex-col gap-4">
                {navFields.map((field, index) => (
                  <Link
                    key={field.name}
                    to={field.href}
                    target={field.target}
                    rel={field.rel}
                    className="text-sm text-white hover:text-gray-300 transition-all duration-300 ease-out opacity-100 translate-x-0"
                    style={{ transitionDelay: `${index * 50}ms` }}
                    onClick={(e) => handleNavClick(e, field.href, true)}
                  >
                    {field.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}