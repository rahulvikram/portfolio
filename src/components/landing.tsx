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
        className="h-32 w-32 rounded-sm object-cover"
      />

      <div>
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">Rahul Vikram</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Software engineer, web developer, AI researcher, and photographer.
        </p>

        <div className="mt-4 flex items-center gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            view resume
          </a>
        </div>
      </div>
    </section>
  )
}
