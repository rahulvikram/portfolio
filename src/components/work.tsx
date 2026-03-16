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
        "Built a full-stack Scholarship Management System for the OSU Foundation using React, TypeScript, and .NET 8, with a microservices architecture that streamlined scholarship administration. Developed secure APIs with ASP.NET, C#, Entity Framework, and Azure SQL, integrating Entra ID, JWT, and Key Vault for authentication. Achieved 98% test coverage with Cypress and automated build, test, and deployment pipelines in Azure DevOps. Also led migration of an iOS seed analysis app to Swift 6, modernizing APIs and adopting async/await for better maintainability.",
      technologies: ["React", "TypeScript", "C#", "SQL Server", "EF Core", "ASP.NET", "Azure", "Docker", "Cypress", "Git", "GitHub", "Azure DevOps", "Swift", "Xcode"],
    },
    {
      title: "Software Engineer Intern",
      company: "Oregon Department of Transportation",
      period: "June 2025 - August 2025",
      link: "https://odot.oregon.gov/",
      logo: odot,
      description:
        "Led migration of a legacy .NET MVC variable speed reporter app to a modern .NET 8 ASP.NET Core solution, adopting domain models, dependency injection, and config patterns for improved maintainability. Integrated the ODOT Message Query API with a Refit REST client using the repository pattern, and built a GitHub Actions CI/CD pipeline to automate testing and deployment. Developed C# LINQ extensions, refactored Razor views, and implemented a recursive parent-child ordering algorithm for corridors, segments, and signs to ensure consistent data rendering.",
      technologies: ["C#", ".NET", "Git", "Azure DevOps" ],
    },
    {
      title: "Applied AI Research Intern",
      company: "STAR Lab",
      period: "October 2024 - May 2025",
      link: "https://web.engr.oregonstate.edu/~chenliz/research.html",
      logo: osucoe,
      description:
        "Helped write a NeurIPS 2025 paper on NLP research using LLMs to generate Natural Semantic Metalanguage (NSM) explications, advancing cross-linguistic semantic representation. Fine-tuned PyTorch-based LLMs on specialized datasets to produce accurate, universally translatable outputs that outperformed GPT-4o benchmarks. Built evaluation metrics and Python scripts with NLTK to validate over 1M words of semantic outputs against NSM filters, ensuring accuracy and reproducibility.",
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
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF0080] via-[#7928CA] via-60% to-[#0070F3] to-90% hidden md:block" style={{ backgroundImage: "linear-gradient(to bottom, #0070F3 66%, #38bdf8 100%)" }} />
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
                                <Card className="p-5 bg-black/80 hover:shadow-lg transition-all hover:translate-x-2 duration-300">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                        <div className="flex items-center gap-3">
                                            {/* Company Logo */}
                                            <a href={exp.link} target="_blank" rel="noopener noreferrer">
                                                <div className=" rounded bg-muted flex items-center justify-center border border-border">
                                                    <img
                                                        src={exp.logo}
                                                        alt={`${exp.company} logo`}
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