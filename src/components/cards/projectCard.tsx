"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TechBlock } from "./techBlock"

type ProjectCardProps = {
  title: string
  description: string
  image: string
  link: string
  technologies: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      style={{ textDecoration: "none" }}
    >
      <Card
        className="project-card relative bg-gray-900 backdrop-blur-sm w-xl border-b border-gray-900 shadow-lg cursor-pointer ease-in-out hover:[background:linear-gradient(135deg,var(--palette-pink)_0%,var(--palette-purple)_33%,var(--palette-blue)_66%,var(--palette-cyan)_100%)] transition-transform transition-colors duration-1000"
        style={{
          transition: "background-color 0.5s ease-in, background 0.5s ease-in, transform 0.2s",
        }}
      >
      
        <CardHeader>
          <img
            src={image}
            alt={title}
            className="rounded-md object-cover w-full h-72 md:h-96"
          />
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white">{title}</CardTitle>
          <CardDescription className="mb-2 text-white text-base md:text-lg">{description}</CardDescription>
          <div className="flex flex-wrap gap-3 mt-2">
            {technologies.map((tech) => (
              <div className="mr-2 flex gap-2">
               <TechBlock key={tech} icon={tech} name={tech} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
