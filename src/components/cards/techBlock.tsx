
// **Note:** The following technologies from your list don't have icons available in the `@icons-pack/react-simple-icons` library:
// - **C#** - No SiCsharp icon exists (there's only SiFsharp for F#)
// - **Java** - No SiJava icon exists  
// - **SQL** - No generic SQL icon (only specific databases like MySQL, PostgreSQL, SQLite)
// - **AWS** - No SiAmazonaws or similar icon found
// - **Azure DevOps** - No SiAzuredevops icon found
// - **Matplotlib** - No SiMatplotlib icon found
// - **MagicUI** - No icon found
// - **REST** - No icon found
// - **Visual Studio** (full IDE) - Only VSCode is available


import { 
    SiPython, 
    SiJavascript, 
    SiTypescript, 
    SiC, 
    SiCplusplus, 
    SiHtml5, 
    SiCss,
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
    SiFirebase,
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
    SiGooglecolab
} from '@icons-pack/react-simple-icons';

// Create a mapping from icon name (string) to the respective icon component
const iconMap: Record<string, React.ComponentType> = {
    // Languages
    Python: SiPython,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    C: SiC,
    'C++': SiCplusplus,
    HTML: SiHtml5,
    CSS: SiCss,
    Swift: SiSwift,
    R: SiR,
    "Node.js": SiNodedotjs,
    // Frameworks & Libraries
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
    Flask: SiFlask,
    
    // Cloud & Services
    Vercel: SiVercel,
    'Vercel AI SDK': SiVercel,
    Firebase: SiFirebase,
    
    // Databases
    MySQL: SiMysql,
    PostgreSQL: SiPostgresql,
    
    // Data Science
    NumPy: SiNumpy,
    pandas: SiPandas,
    'Scikit-Learn': SiScikitlearn,
    Tensorflow: SiTensorflow,
    PyTorch: SiPytorch,
    
    // Tools
    Git: SiGit,
    GitHub: SiGithub,
    Docker: SiDocker,
    'Jupyter Notebook': SiJupyter,
    Jupyter: SiJupyter,
    'Google Colab': SiGooglecolab
};

export function TechBlock({ icon, name }: { icon: string, name: string }) {
    // Get the icon component from the map
    const IconComponent = iconMap[icon];

    return (
        <>
            {IconComponent ? (
                <div className="tech-block">
                    <div className="tech-block-icon">
                        <IconComponent />
                    </div>
                </div>
            ) : (
                <div className="tech-block">
                    <div className="tech-block-icon flex items-center justify-center">
                        <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon.toLowerCase()}/${icon.toLowerCase()}-original.svg`}
                            alt={icon}
                            style={{ display: "block", width: "1.6rem", height: "1.6rem", objectFit: "contain" }}
                        />
                    </div>
                </div>
            )}
            <span className="tech-block-name">{name}</span>

        </>
    )
}