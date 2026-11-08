import { Section } from "./section";
import { TechTags } from "./tech-tags";
import odot from "../assets/company-logos/odot.png";
import osu from "../assets/company-logos/osu.png";
import osucoe from "../assets/company-logos/osucoe.png";
import viasat from "../assets/company-logos/viasat.jpg";

type Role = Readonly<{
    title: string
    period: string
    description?: string
    technologies?: string[]
}>

type Company = Readonly<{
    name: string
    link: string
    logo: string
    roles: Role[] // newest first
}>

const viasatTech = ["React", "TypeScript", "Zod", "Node.js", "Express", "SQL", "BigQuery", "AWS Lambda", "Vitest", "Playwright", "Claude", "Git", "GitHub", "Jira", "Confluence"]

const companies: Company[] = [
    {
        name: "Viasat",
        link: "https://www.viasat.com/",
        logo: viasat,
        roles: [
            {
                title: "Full-Stack Software Engineer",
                period: "March 2027 - Present",
                description: "Ads Insights",
                technologies: viasatTech,
            },
            {
                title: "Full-Stack Software Engineer (Part-Time)",
                period: "September 2026 - December 2026",
                description: "Continuing work on Ads Insights with the full-stack engineering team.",
                technologies: viasatTech,
            },
            {
                title: "Full-Stack Software Engineer Intern",
                period: "June 2026 - September 2026",
                description:
                    "Expanded self-serve financial reporting, ad-product campaign consolidation, and integration testing infrastructure for Ads Insights, serving 600+ internal/external platform clients.",
                technologies: viasatTech,
            },
        ],
    },
    {
        name: "OSU Center for Applied Systems and Software",
        link: "https://cass.oregonstate.edu/",
        logo: osu,
        roles: [
            {
                title: "Software Engineering Student Mentor",
                period: "January 2027 - March 2027",
                description: "Mentoring new student software developers at CASS.",
            },
            {
                title: "Software Engineering Intern",
                period: "January 2025 - June 2026",
                description:
                    "Developing scholarship administration system for OSU Foundation, leading Swift 6 migration of iOS seed analysis app, and modernizing Docker deployment workflows for an energy research platform.",
                technologies: ["React", "TypeScript", "C#", "SQL Server", "EF Core", "ASP.NET", "Azure", "Docker", "Cypress", "Git", "GitHub", "Azure DevOps", "Swift", "Xcode"],
            },
        ],
    },
    {
        name: "Oregon Department of Transportation",
        link: "https://odot.oregon.gov/",
        logo: odot,
        roles: [
            {
                title: "Software Engineering Intern",
                period: "June 2025 - August 2025",
                description:
                    "Upgrading VSL platform features, refactoring Vue.js & Razor views, and writing SQL migration scripts to automate ETL pipeline workflows for TOCS maintenance.",
                technologies: ["React", "TypeScript", "Vue", "C#", ".NET", "Git", "MySQL", "SQL Server", "Azure DevOps"],
            },
        ],
    },
    {
        name: "STAR Lab",
        link: "https://web.engr.oregonstate.edu/~chenliz/research.html",
        logo: osucoe,
        roles: [
            {
                title: "Applied AI Research Intern",
                period: "October 2024 - May 2025",
                description:
                    "Collaborated with PhD researchers in an AI accelerator lab to develop fine-tuned LLMs for generative NLP and NSM explication, building Python validation pipelines to analyze 1M+ word datasets.",
                technologies: ["Python", "PyTorch"],
            },
        ],
    },
]

/** Overall span across a company's roles, e.g. "June 2026 - Present". */
function companyPeriod(roles: Role[]) {
    const start = roles[roles.length - 1].period.split(" - ")[0]
    const end = roles[0].period.split(" - ")[1]
    return `${start} - ${end}`
}

function CompanyLogo({ company }: Readonly<{ company: Company }>) {
    return (
        <a href={company.link} target="_blank" rel="noopener noreferrer" className="shrink-0">
            <img
                src={company.logo}
                alt={`${company.name} logo`}
                loading="lazy"
                decoding="async"
                className="h-8 w-8 rounded-sm object-contain"
            />
        </a>
    )
}

function RoleDetails({ role, subtitle }: Readonly<{ role: Role; subtitle?: string }>) {
    return (
        <>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-sm font-medium">{role.title}</h3>
                <span className="font-mono text-xs whitespace-nowrap text-muted-foreground">
                    {role.period}
                </span>
            </div>
            {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
            {role.description && (
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.description}</p>
            )}
            {role.technologies && <TechTags items={role.technologies} className="mt-3" />}
        </>
    )
}

export function Work() {
    return (
        <Section id="my-work" title="Work">
            <ul className="divide-y divide-border">
                {companies.map((company) => (
                    <li key={company.name} className="py-6 first:pt-0 last:pb-0">
                        {company.roles.length === 1 ? (
                            <div className="flex gap-4">
                                <CompanyLogo company={company} />
                                <div className="min-w-0 flex-1">
                                    <RoleDetails role={company.roles[0]} subtitle={company.name} />
                                </div>
                            </div>
                        ) : (
                            <>
                                <div className="flex gap-4">
                                    <CompanyLogo company={company} />
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-sm font-medium">{company.name}</h3>
                                        <p className="font-mono text-xs text-muted-foreground">
                                            {companyPeriod(company.roles)}
                                        </p>
                                    </div>
                                </div>

                                {/* Vertical timeline: dots sit under the logo, roles align with the header text */}
                                <ol className="mt-5 pl-12">
                                    {company.roles.map((role, i) => (
                                        <li key={`${role.title}-${role.period}`} className="relative pb-6 last:pb-0">
                                            <span
                                                aria-hidden
                                                className="absolute top-[7px] -left-8 z-10 size-1.5 -translate-x-1/2 rounded-full bg-muted-foreground"
                                            />
                                            {i < company.roles.length - 1 && (
                                                <span
                                                    aria-hidden
                                                    className="absolute top-[10px] -left-8 h-full w-px -translate-x-1/2 bg-border"
                                                />
                                            )}
                                            <RoleDetails role={role} />
                                        </li>
                                    ))}
                                </ol>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </Section>
    )
}
