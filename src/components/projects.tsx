import { ProjectCard } from "./cards/projectCard";
import { AuroraText } from "./ui/aurora-text";

import runmetrics from "../assets/project-photos/runmetrics.png";
import academia from "../assets/project-photos/academia.png";
import beaverboard from "../assets/project-photos/beaver-board.png";
import groqqoli from "../assets/project-photos/groqqoli.png";
import leaflens from "../assets/project-photos/leaflens.png";
import packtrack from "../assets/project-photos/packtrack.jpg";

export function Projects() {
    return (
        <section id="projects" className="px-6 py-24">
            <div className="flex flex-row items-center justify-center">
                <span className="text-7xl font-black mb-20 mr-4">My</span>
                <AuroraText className="text-7xl font-black mb-20">Projects</AuroraText>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[600px] gap-y-6 justify-items-center">
                <ProjectCard
                    title="RunMetrics Visualizer"
                    description="Devtool library built from scratch, focused on algorithm analysis data aggregation & visualization. Published to PyPi."
                    image={runmetrics}
                    link="https://pypi.org/project/runmetricsvisualizer/"
                    technologies={["Python", "pandas", "matplotlib", "Git", "pypi"]}
                />
                <ProjectCard
                    title="Academia Hero"
                    description="Discord bot desgined to assist OSU students with retreiving courses, upcoming assignments, and grades via Canvas API."
                    image={academia}
                    link="https://github.com/rahulvikram/Academia-Hero/"
                    technologies={["JavaScript", "Node.js", "MySQL", "Postman", "Git"]}
                />
                <ProjectCard
                    title="Beaver Board"
                    description="A minimalistic app where student users can dynamically keep track of upcoming assignments, exams, projects, and classes."
                    image={beaverboard}
                    link="https://github.com/rahulvikram/beaver-board/"
                    technologies={["Vue", "JavaScript", "Node.js", "Express", "Firebase", "Vite", "Git"]}
                />
                <ProjectCard
                    title="Groqqoli"
                    description="An AI cooking assistant with features such as recipe suggestions from ingredient images, and a text-to-speech recipe voice assistant. Built for BeaverHacks 2025."
                    image={groqqoli}
                    link="https://github.com/rahulvikram/groqqoli-beavhacks/"
                    technologies={["Next.js", "React", "TypeScript", "Tailwind", "Magic UI", "Vercel", "Git"]}
                />
                <ProjectCard
                    title="Leaflens.ai"
                    description="An AI-powered tool that analyzes plant images and provides detailed insights about plant health, detected diseases, and recommended treatments. Powered by Google GenAI."
                    image={leaflens}
                    link="https://github.com/rahulvikram/doctor-plant"
                    technologies={["React", "Next.js", "TypeScript", "Tailwind", "AWS", "Shadcn UI", "Python", "Flask", "Firebase", "Gemini", "Git"]}
                />
                <ProjectCard
                    title="PackTrack (Work in Progress)"
                    description="A platform where delivery/logistics companies can track packages in real-time, get alerts when certain events happen (e.g., package delayed, reached hub), and support multiple clients."
                    image={packtrack}
                    link=""
                    technologies={["React", "Redux Toolkit", "Tailwind", "Python", "Flask", "RabbitMQ", "PostgreSQL", "AWS", "Git"]}
                />
            </div>
        </section>
    )
}