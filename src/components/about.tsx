import { Award, Camera, Globe, Cpu } from "lucide-react"
import { AuroraText } from "./ui/aurora-text"
import { FancyLink } from "./ui/fancy-link"

export function About(){
    return (
      <section id="about-me" className="px-6 py-24">
        <div className="flex flex-row items-center justify-center">
          <AuroraText className="text-7xl font-black mb-20 mr-5">About</AuroraText>
          <span className="text-7xl font-black mb-20">Me</span>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="space-y-4 text-pretty leading-relaxed text-xl text-white text-left">
                <p>
                  Hi, welcome to my personal website! I'm Rahul Vikram, a software engineer and AI researcher.
                </p>
                <p>
                  I'm currently an undergraduate student at Oregon State University, pursuing a <FancyLink href="https://catalog.oregonstate.edu/college-departments/engineering/school-electrical-engineering-computer-science/computer-science-ba-bs-hba-hbs/#text">B.S. in Computer Science</FancyLink>.
                </p>
                <p>
                  Currently, I'm working as a software developer at the <FancyLink href="https://cass.oregonstate.edu/">Center for Applied Systems and Software (CASS)</FancyLink> at Oregon State University. I've worked with a variety of technologies at CASS, including React, TypeScript, Redux Toolkit, Cypress, C#, ASP.NET, SQL Server, Azure DevOps, and Swift, delivering high-quality software solutions to various clients.
                </p>
                <p>
                I've also worked as an AI research intern at <FancyLink href="https://web.engr.oregonstate.edu/~chenliz/research.html">STAR Lab at OSU</FancyLink>, where I co-authored a <FancyLink href="https://arxiv.org/abs/2505.11764">NeurIPS 2025 paper</FancyLink> focused on advancing NLP research by leveraging large language models (LLMs) to automatically generate Natural Semantic Metalanguage (NSM) explications, facilitating cross-linguistic semantic representation.
                </p>
              </div>
            </div>
  
            <div className="space-y-6">
              <div
                className="rounded-lg border border-gray-800 backdrop-blur-md p-6 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #FF0080 0%, #7928CA 33%, #0070F3 66%, #38bdf8 100%)"
                }}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Cpu className="h-6 w-6 text-white " />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Software Engineer</h3>
                <p className="text-pretty text-white">
                  Developing and maintaining software solutions for clients at CASS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}