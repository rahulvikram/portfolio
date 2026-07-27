import type { ComponentType, SVGProps } from "react"
import {
    SiPython,
    SiJavascript,
    SiTypescript,
    SiC,
    SiCplusplus,
    SiOpenai,
    SiHtml5,
    SiCss,
    SiShadcnui,
    SiXyflow,
    SiRadixui,
    SiGooglegemini,
    SiMagic,
    SiSwift,
    SiR,
    SiReact,
    SiNodedotjs,
    SiNextdotjs,
    SiVuedotjs,
    SiExpress,
    SiVite,
    SiRedux,
    SiCypress,
    SiTailwindcss,
    SiVercel,
    SiDotnet,
    SiMysql,
    SiPostgresql,
    SiFlask,
    SiNumpy,
    SiPandas,
    SiScikitlearn,
    SiTensorflow,
    SiPytorch,
    SiGit,
    SiGithub,
    SiDocker,
    SiJupyter,
    SiXcode,
    SiGooglecolab,
    SiDrizzle,
    SiClerk,
    SiSocketdotio,
    SiZod,
    SiTurborepo,
    SiRoboflow,
    SiGooglebigquery,
    SiClaude,
    SiFlyway
} from '@icons-pack/react-simple-icons';

/**
 * Brand-colored marks, keyed by the exact label used in tech lists. Rendered
 * with color="default" so each icon uses its official brand hex.
 */
const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    Python: SiPython,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    C: SiC,
    'C++': SiCplusplus,
    HTML: SiHtml5,
    HTML5: SiHtml5,
    CSS: SiCss,
    CSS3: SiCss,
    Swift: SiSwift,
    R: SiR,
    'Node.js': SiNodedotjs,
    React: SiReact,
    'Next.js': SiNextdotjs,
    Vue: SiVuedotjs,
    Express: SiExpress,
    Vite: SiVite,
    'Redux Toolkit': SiRedux,
    Redux: SiRedux,
    Cypress: SiCypress,
    Tailwind: SiTailwindcss,
    'Tailwind CSS': SiTailwindcss,
    'ASP.NET': SiDotnet,
    '.NET': SiDotnet,
    Flask: SiFlask,
    'Shadcn UI': SiShadcnui,
    'Radix UI': SiRadixui,
    'Magic UI': SiMagic,
    Gemini: SiGooglegemini,
    OpenAI: SiOpenai,
    Xcode: SiXcode,
    Vercel: SiVercel,
    'Vercel AI SDK': SiVercel,
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    NumPy: SiNumpy,
    pandas: SiPandas,
    'Scikit-Learn': SiScikitlearn,
    sklearn: SiScikitlearn,
    Tensorflow: SiTensorflow,
    tensorflow: SiTensorflow,
    PyTorch: SiPytorch,
    pytorch: SiPytorch,
    Git: SiGit,
    GitHub: SiGithub,
    Docker: SiDocker,
    'Jupyter Notebook': SiJupyter,
    Jupyter: SiJupyter,
    'Google Colab': SiGooglecolab,
    'Drizzle ORM': SiDrizzle,
    Clerk: SiClerk,
    'Socket.IO': SiSocketdotio,
    Zod: SiZod,
    Turborepo: SiTurborepo,
    Roboflow: SiRoboflow,
    'React Flow': SiXyflow,
    Claude: SiClaude,
    BigQuery: SiGooglebigquery,
    Flyway: SiFlyway,
}

/** Labels whose devicon path doesn't match the lowercased label. */
const deviconPaths: Record<string, string> = {
    'aws': 'amazonwebservices/amazonwebservices-original',
    'c#': 'csharp/csharp-original',
    'csharp': 'csharp/csharp-original',
    'sql server': 'microsoftsqlserver/microsoftsqlserver-original',
    'ef core': 'entityframeworkcore/entityframeworkcore-original',
    'azure devops': 'azuredevops/azuredevops-original',
    'devops': 'azuredevops/azuredevops-original',
    'visual studio': 'visualstudio/visualstudio-plain',
    'sql': 'azuresqldatabase/azuresqldatabase-original',
    'rest': 'fastapi/fastapi-original',
    'matplotlib': 'matplotlib/matplotlib-original',
}

function deviconUrl(label: string): string {
    const key = label.toLowerCase()
    const path = deviconPaths[key] ?? `${key}/${key}-original`
    return `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`
}

type TechIconProps = Readonly<{
    name: string
    className?: string
}>

export function TechIcon({ name, className = "h-3.5 w-3.5" }: TechIconProps) {
    const Icon = iconMap[name]

    if (Icon) {
        return <Icon className={className} color="default" />
    }

    return (
        <img
            src={deviconUrl(name)}
            alt=""
            loading="lazy"
            decoding="async"
            className={`${className} object-contain`}
            onError={(e) => {
                // No devicon exists for this label; drop the slot rather than
                // rendering a broken-image glyph next to the name.
                e.currentTarget.style.display = "none"
            }}
        />
    )
}
