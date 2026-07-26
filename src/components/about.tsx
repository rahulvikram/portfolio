import { Section } from "./section"
import { FancyLink } from "./ui/fancy-link"

export function About() {
    return (
      <Section id="about-me" title="About">
        <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
          <p>
              Hi, welcome to my personal website! I'm Rahul Vikram, a software engineer, web developer, AI researcher, and photographer in my free time.
          </p>
          <p>
              Originally from Portland, I'm currently an undergraduate student at Oregon State University, pursuing a <FancyLink href="https://catalog.oregonstate.edu/college-departments/engineering/school-electrical-engineering-computer-science/computer-science-ba-bs-hba-hbs/#text">B.S. in Computer Science</FancyLink>.
          </p>
          <p>
              Currently, I'm working as a software developer at the <FancyLink href="https://cass.oregonstate.edu/">Center for Applied Systems and Software (CASS)</FancyLink> at Oregon State University. I've worked with a variety of technologies at CASS, including React, TypeScript, Redux Toolkit, Cypress, C#, ASP.NET, SQL Server, Azure DevOps, and Swift, delivering high-quality software solutions to various clients.
          </p>
          <p>
              I've also worked as an AI research intern at <FancyLink href="https://web.engr.oregonstate.edu/~chenliz/research.html">STAR Lab</FancyLink>, where I helped write a paper <FancyLink href="https://arxiv.org/abs/2505.11764">submitted to NeurIPS 2025</FancyLink> focused on advancing NLP research by designing LLMs to automatically generate Natural Semantic Metalanguage explications, facilitating cross-linguistic semantic representation.
          </p>
          <p className="text-foreground">
              This website is meant to be a showcase of my work.
          </p>
        </div>
      </Section>
    )
}
