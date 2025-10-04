import { AuroraText } from "./ui/aurora-text";
import { SkillCard } from "./cards/skillCard";

export function Skills() {
    return (
        <section id="skills" className="px-6 py-24">
            <div className="flex flex-row items-center justify-center">
                <AuroraText className="text-7xl font-black mb-20 mr-4">Technical</AuroraText>
                <span className="text-7xl font-black mb-20">Skills</span>
            </div>
            <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCard
                    title="Programming Languages"
                    techs={["Python", "JavaScript", "TypeScript", "C", "C++", "C#", "Java", "SQL", "HTML5", "CSS3"]}
                />
                <SkillCard
                    title="Developer Tools"
                    techs={["Git", "GitHub", "Docker", "DevOps", "Visual Studio", "VSCode", "Jupyter", "Google Colab"]}
                />
                <SkillCard
                    title="Frontend Frameworks"
                    techs={["React", "Next.js", "Vue", "Redux", "Vite", "Tailwind", "Cypress"]}
                />
                <SkillCard
                    title="Databases & Cloud"
                    techs={["MySQL", "PostgreSQL", "SQL Server", "AWS", "Firebase"]}
                />
                <SkillCard
                    title="Backend Frameworks"
                    techs={["Express", "REST", "Flask", ".NET"]}
                />
                <SkillCard
                    title="Machine Learning"
                    techs={["NumPy", "pandas", "sklearn", "matplotlib", "tensorflow", "pytorch"]}
                />
            </div>
        </section>
    )
}

// Version Control: Git, GitHub

// Project Management / CI-CD: Azure DevOps

// Containerization: Docker

// IDEs / Editors: Visual Studio, VSCode

// Notebooks: Jupyter Notebook, Google Colab