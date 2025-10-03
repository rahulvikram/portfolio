import { ProjectCard } from "./cards/projectCard";
import { AuroraText } from "./ui/aurora-text";

export function Projects() {
    return (
        <section id="projects" className="px-6 py-24">
            <div className="flex flex-row items-center justify-center">
                <span className="text-7xl font-black mb-20 mr-4">My</span>
                <AuroraText className="text-7xl font-black mb-20">Work</AuroraText>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
                <ProjectCard
                    title="RunMetrics Visualizer"
                    description="See our latest and best camp destinations all across the five continents of the globe."
                    image="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    link="https://yournextcamp.com"
                    technologies={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
                />
                <ProjectCard
                    title="RunMetrics Visualizer"
                    description="See our latest and best camp destinations all across the five continents of the globe."
                    image="https://images.unsplash.com/photo-1736606355698-5efdb410fe93?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    link="https://yournextcamp.com"
                    technologies={["React", "Next.js", "Tailwind CSS", "TypeScript"]}
                />
            </div>
        </section>
    )
}