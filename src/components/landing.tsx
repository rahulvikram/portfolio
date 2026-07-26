import { ArrowUpRight } from "lucide-react"
import { socialLinks } from "@/lib/social"
import me from "../assets/me.jpg"
import Resume from "../assets/Resume.pdf"

export function Landing() {
  return (
    <section
      id="landing"
      className="flex flex-col gap-6 py-16 sm:flex-row sm:items-center sm:gap-8"
    >
      <img
        src={me}
        alt="Rahul Vikram"
        width={128}
        height={128}
        loading="eager"
        decoding="async"
        className="h-32 w-32 object-cover"
      />

      <div>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Rahul Vikram</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          full-stack software engineer. interests: distributed systems and photography.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: social.color }}
              className="inline-flex items-center gap-1 border border-background/100 px-4 py-2 font-mono text-xs text-white transition-opacity hover:opacity-80"
            >
              <social.icon className="h-3.5 w-3.5" />
              {social.name.toLowerCase()}
            </a>
          ))}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-r-2xl border border-background/100 bg-foreground px-4 py-2 font-mono text-xs text-background transition-opacity hover:opacity-80"
          >
            resume
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
