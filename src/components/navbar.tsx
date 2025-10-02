"use client"

import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

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
      name: "Resume",
      href: "#resume"
    },
    {
      name: "Contact",
      href: "#contact"
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
          <Link to="/" className="flex flex-col">
            <span 
              className={`text-2xl text-white font-black transition-all duration-700 ease-out ${
                showNavText 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform -translate-y-4'
              }`}
            >
              Rahul Vikram
            </span>
            <span 
              className={`text-md transition-all duration-700 ease-out delay-100 ${
                showNavText 
                  ? 'opacity-100 transform translate-y-0' 
                  : 'opacity-0 transform -translate-y-4'
              }`}
              style={{ color: "var(--palette-light-blue)" }}
            >
              Software Engineer
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
                <span className="text-white font-semibold hover:text-gray-300 transition-colors">
                  {field.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`md:hidden p-2 text-white transition-all duration-500 ease-out ${
              showNavText 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-4'
            }`}
            style={{ transitionDelay: '400ms' }}
            aria-label="Toggle menu"
          >
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