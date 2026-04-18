import { AuroraText } from "./ui/aurora-text";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import odot from "../assets/company-logos/odot.png";
import osu from "../assets/company-logos/osu.png";
import osucoe from "../assets/company-logos/osucoe.png";
import { TechBlock } from "./cards/techBlock";

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
        <section id="my-work" className="px-6 py-16">
            <div className="flex flex-row items-center justify-center">
                <span className="text-5xl font-black mb-12 mr-3">Work</span>
                <AuroraText className="text-5xl font-black mb-12">Experience</AuroraText>
            </div>
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical Timeline Line */}
                <div className="absolute left-[1.72rem] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF0080] via-[#7928CA] via-60% to-[#0070F3] to-90% hidden md:block" style={{ backgroundImage: "linear-gradient(to bottom, #0070F3 66%, #38bdf8 100%)" }} />
                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative flex items-start gap-6">
                            {/* Timeline Dot */}
                            <div className="hidden md:flex items-center justify-center flex-shrink-0">
                                <div className="relative z-10 flex items-center justify-center w-14 h-14">

                                    {/* Inner solid gradient dot with outer glow */}
                                    <div
                                        className="relative w-6 h-6 rounded-full shadow-lg"
                                        style={{
                                            background: "linear-gradient(135deg, #0070F3 0%, #38bdf8 100%)",
                                            boxShadow: "0 0 24px 8px rgb(56, 189, 248, 0.3), 0 0 0 0 rgb(0, 112, 243, 0.3), 0 0 0 0 rgb(255, 0, 128, 0.3)"
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex-1">
                                <Card className="p-5 !py-5 !gap-2 bg-black/80 hover:shadow-lg transition-all hover:translate-x-2 duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-3">
                                            {/* Company Logo */}
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                <div className=" rounded bg-muted flex items-center justify-center border border-border">
                                                    <img
                                                        src={exp.logo}
                                                        alt={`${exp.company} logo`}
                                                        loading="lazy"
                                                        decoding="async"
                                                        className="w-11 h-11 object-cover"
                                                        />
                                                </div>
                                            </a>
                                            <div>
                                                <h3 className="text-lg font-semibold text-foreground text-left">{exp.title}</h3>
                                                <p
                                                    className="font-medium text-base text-left"
                                                    style={{
                                                        background: "linear-gradient(135deg, #0070F3 0%, #38bdf8 100%)",
                                                        WebkitBackgroundClip: "text",
                                                        WebkitTextFillColor: "transparent",
                                                        backgroundClip: "text",
                                                        color: "transparent"
                                                    }}
                                                >
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>
                                        <span className="text-sm text-white whitespace-nowrap">{exp.period}</span>
                                    </div>
                                    <p className="text-white text-sm mb-3 leading-relaxed text-left">{exp.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {exp.technologies.map((tech) => (
                                            <Badge key={tech} variant="outline" className="text-sm px-1.5 py-0.5">
                                                <TechBlock icon={tech} name={tech} />
                                            </Badge>
                                            ))}
                                        </div>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}