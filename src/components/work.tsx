import { Section } from "./section";
import { TechTags } from "./tech-tags";
import odot from "../assets/company-logos/odot.png";
import osu from "../assets/company-logos/osu.png";
import osucoe from "../assets/company-logos/osucoe.png";

const experiences = [
    {
      title: "Full-Stack Software Developer",
      company: "OSU Center for Applied Systems and Software",
      period: "January 2025 - Present",
      link: "https://cass.oregonstate.edu/",
      logo: osu,
      description:
        "Developing scholarship administration system for OSU Foundation, leading Swift 6 migration of iOS seed analysis app, and modernizing Docker deployment workflows for an energy research platform.",
      technologies: ["React", "TypeScript", "C#", "SQL Server", "EF Core", "ASP.NET", "Azure", "Docker", "Cypress", "Git", "GitHub", "Azure DevOps", "Swift", "Xcode"],
    },
    {
      title: "Software Engineer Intern",
      company: "Oregon Department of Transportation",
      period: "June 2025 - August 2025",
      link: "https://odot.oregon.gov/",
      logo: odot,
      description:
        "Upgrading VSL platform features, refactoring Vue.js & Razor views, and writing SQL migration scripts to automate ETL pipeline workflows for TOCS maintenance.",
      technologies: ["React", "TypeScript", "Vue", "C#", ".NET", "Git", "MySQL", "SQL Server", "Azure DevOps" ],
    },
    {
      title: "Applied AI Research Intern",
      company: "STAR Lab",
      period: "October 2024 - May 2025",
      link: "https://web.engr.oregonstate.edu/~chenliz/research.html",
      logo: osucoe,
      description:
        "Collaborated with PhD researchers in an AI accelerator lab to develop fine-tuned LLMs for generative NLP and NSM explication, building Python validation pipelines to analyze 1M+ word datasets.",
      technologies: ["Python", "PyTorch", ],
    },
]

export function Work() {
    return (
        <Section id="my-work" title="Work">
            <ul className="divide-y divide-border">
                {experiences.map((exp) => (
                    <li key={exp.company} className="flex gap-4 py-6 first:pt-0 last:pb-0">
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
                            <img
                                src={exp.logo}
                                alt={`${exp.company} logo`}
                                loading="lazy"
                                decoding="async"
                                className="h-8 w-8 rounded-sm object-contain"
                            />
                        </a>

                        <div className="min-w-0 flex-1">
                            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                                <h3 className="text-sm font-medium">{exp.title}</h3>
                                <span className="font-mono text-xs whitespace-nowrap text-muted-foreground">
                                    {exp.period}
                                </span>
                            </div>
                            <p className="text-xs text-muted-foreground">{exp.company}</p>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                            <TechTags items={exp.technologies} className="mt-3" />
                        </div>
                    </li>
                ))}
            </ul>
        </Section>
    )
}
