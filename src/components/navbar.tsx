"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { AuroraText } from "@/components/ui/aurora-text"
import { Sun, Moon, Palette } from "lucide-react"
import { ScrollProgress } from "@/components/ui/scroll-progress"

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
    <>
      <ScrollProgress className="top-[80px] z-50" />
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isAtTop 
            ? 'bg-transparent' 
            : 'backdrop-blur-sm border-b border-gray-800 shadow-lg'
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
            </div>
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
    </>
  )
}