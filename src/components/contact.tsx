"use client"

import { Section } from "./section"
import { socialLinks } from "@/lib/social"

export function Contact() {
  return (
    <>
      <Section id="contact" title="Contact">
        <div className="flex flex-wrap items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="h-4 w-4" />
              {social.name}
            </a>
          ))}
        </div>
      </Section>

      <footer className="flex flex-col gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>Made with ❤️ (and React) by Rahul Vikram</p>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}
