import { ProjectCard } from "./cards/projectCard";
import { AuroraText } from "./ui/aurora-text";

import runmetrics from "../assets/project-photos/runmetrics.png";
import academia from "../assets/project-photos/academia.png";
import beaverboard from "../assets/project-photos/beaver-board.png";
import groqqoli from "../assets/project-photos/groqqoli.png";
import leaflens from "../assets/project-photos/leaflens.png";
import packtrack from "../assets/project-photos/packtrack.jpg";
import internshipscraper from "../assets/company-logos/github.png";
import optimalwakefulness from "../assets/project-photos/optw.png";
import rf from "../assets/project-photos/rf.png";
import consensus from "../assets/project-photos/consensus.png";

export function Projects() {
    return (
        <section id="projects" className="px-6 py-16">
            <div className="flex flex-row items-center justify-center">
                <span className="text-5xl font-black mb-12 mr-3">My</span>
                <AuroraText className="text-5xl font-black mb-12">Projects</AuroraText>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-60 gap-y-4 max-w-6xl mx-auto justify-items-center">
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
                    title="LeafLens.AI"
                    description="An AI-powered tool that analyzes plant images and provides detailed insights about plant health, detected diseases, and recommended treatments. Powered by Google GenAI."
                    image={leaflens}
                    link="https://github.com/rahulvikram/doctor-plant"
                    technologies={["React", "Next.js", "TypeScript", "Tailwind", "AWS", "Shadcn UI", "Python", "Flask", "Firebase", "Gemini", "Git"]}
                />
                <ProjectCard
                    title="Consensus"
                    description="A real-time collaborative decision-making app powered by websockets, enabling users to vote on polls, see live results, and chat with participants."
                    image={consensus}
                    link="https://github.com/rahulvikram/consensus"
                    technologies={["Next.js", "TypeScript", "PostgreSQL", "Drizzle ORM", "Clerk", "Socket.IO", "Tailwind", "Zod", "Turborepo"]}
                />
                <ProjectCard
                    title="PackTrack (Work in Progress)"
                    description="A platform where delivery/logistics companies can track packages in real-time, get alerts when certain events happen (e.g., package delayed, reached hub), and support multiple clients."
                    image={packtrack}
                    link="https://github.com/rahulvikram/packtrack"
                    technologies={["React", "Redux Toolkit", "Tailwind", "Python", "Flask", "RabbitMQ", "PostgreSQL", "AWS", "Git"]}
                />
                <ProjectCard
                    title="RF Safety"
                    description="A real-time road safety platform using Roboflow workflows, inference, and supervision libraries for object detection and annotated safety-zone monitoring."
                    image={rf}
                    link="https://github.com/rahulvikram/rf-safety"
                    technologies={["React", "Tailwind", "Python", "Flask", "Roboflow", "Git"]}
                />
                <ProjectCard
                    title="Watch Your Sleep"
                    description="A Swift-based Apple Watch app that uses real-time sleep and motion data to wake users at an optimal point in their sleep cycle."
                    image={optimalwakefulness}
                    link="https://github.com/Carson274/Optimal-Wakefulness/"
                    technologies={["Swift", "Xcode"]}
                />
                <ProjectCard
                    title="Internship Scraper"
                    image={internshipscraper}
                    description="A Python script that monitors internship repositories and notifies users of new postings through an integrated Discord webhook."
                    link="https://github.com/rahulvikram/internship-scraper/"
                    technologies={["Python", "GitHub", "Git"]}
                />
                <ProjectCard
                    title="Towards Universal Semantics w/ LLMs"
                    description="Introduces LLMs capable of generating Natural Semantic Metalanguage explications using fine-tuned Llama-3 models, a 44K-entry NSM dataset, and evaluation pipelines."
                    link="https://arxiv.org/pdf/2505.11764"
                    technologies={["Python", "PyTorch", "Git"]}
                />
                <ProjectCard
                    title="ASPortfolio"
                    description="A simple portfolio website and online marketplace built in ASP.NET Core MVC to explore core system design concepts."
                    link="https://github.com/rahulvikram/aspnet"
                    technologies={["C#", ".NET", "ASP.NET", "Git"]}
                />
            </div>
        </section>
    )
}