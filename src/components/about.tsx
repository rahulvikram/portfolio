import { Award, Camera, Globe, Cpu } from "lucide-react"
import { AuroraText } from "./ui/aurora-text"
import { FancyLink } from "./ui/fancy-link"
import { ProjectCard } from "./cards/projectCard"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import me from "../assets/me.jpg"
export function About(){
    return (
      <section id="about-me" className="px-6 py-24 ">
        <div className="flex flex-row items-center justify-center">
          <AuroraText className="text-7xl font-black mb-20 mr-5">About</AuroraText>
          <span className="text-7xl font-black mb-20">Me</span>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="space-y-4 text-pretty leading-relaxed text-xl text-white text-left">
                <p>
                    Hi, welcome to my personal website! I'm Rahul Vikram, a software engineer, web developer, AI researcher, and photographer in my free time.
                </p>
                <p>
                    I'm currently an undergraduate student at Oregon State University, pursuing a <FancyLink href="https://catalog.oregonstate.edu/college-departments/engineering/school-electrical-engineering-computer-science/computer-science-ba-bs-hba-hbs/#text">B.S. in Computer Science</FancyLink>.
                </p>
                <p>
                    Currently, I'm working as a software developer at the <FancyLink href="https://cass.oregonstate.edu/">Center for Applied Systems and Software (CASS)</FancyLink> at Oregon State University. I've worked with a variety of technologies at CASS, including React, TypeScript, Redux Toolkit, Cypress, C#, ASP.NET, SQL Server, Azure DevOps, and Swift, delivering high-quality software solutions to various clients.
                </p>
                <p>
                    I've also worked as an AI research intern at <FancyLink href="https://web.engr.oregonstate.edu/~chenliz/research.html">STAR Lab</FancyLink>, where I helped write a paper <FancyLink href="https://arxiv.org/abs/2505.11764">submitted to NeurIPS 2025</FancyLink> focused on advancing NLP research by designing LLMs to automatically generate Natural Semantic Metalanguage explications, facilitating cross-linguistic semantic representation.
                </p>
                <p className="font-bold">
                    This website is meant to be a showcase of my work. Feel free to check it out!
                </p>
              </div>
            </div>
  
            <div className="space-y-6">
            <div 
                className="relative max-w shadow-none cursor-pointer transition-transform active:scale-100 border-none">
                <img
                    src={me}
                    alt="Me"
                    width={550}
                    height={550}
                    className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}