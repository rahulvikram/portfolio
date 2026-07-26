import { Section } from "./section";
import { SkillCard } from "./cards/skillCard";

export function Skills() {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
        </Section>
    )
}

// Version Control: Git, GitHub

// Project Management / CI-CD: Azure DevOps

// Containerization: Docker

// IDEs / Editors: Visual Studio, VSCode

// Notebooks: Jupyter Notebook, Google Colab