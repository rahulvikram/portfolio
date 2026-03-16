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
  image?: string
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
  const isClickable = Boolean(link)
  const cardContent = (
    <>
      <Card
        className={`project-card relative bg-black/80 w-xl border-b border-gray-700 shadow-lg ease-in-out transition-transform transition-colors duration-1000 ${
          isClickable
            ? "cursor-pointer hover:[background:linear-gradient(135deg,var(--palette-pink)_0%,var(--palette-purple)_33%,var(--palette-blue)_66%,var(--palette-cyan)_100%)]"
            : "cursor-default"
        }`}
        style={{
          transition: "background-color 0.5s ease-in, background 0.5s ease-in, transform 0.2s",
        }}
      >
        <CardHeader>
          {image ? (
            <img
              src={image}
              alt={title}
              className="rounded-md object-cover w-full h-72 md:h-96"
            />
          ) : (
            <div className="rounded-md w-full h-72 md:h-96 bg-gradient-to-br from-fuchsia-600/30 via-violet-500/20 to-cyan-400/20 border border-white/10 flex items-end p-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">Project</p>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h3>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <CardTitle className="text-3xl md:text-4xl font-extrabold text-white">{title}</CardTitle>
          <CardDescription className="mb-2 text-white text-xl text-gray-200">{description}</CardDescription>
          <div className="flex flex-wrap gap-3 mt-2">
            {technologies.map((tech) => (
              <div key={tech} className="mr-2 flex text-md gap-2">
               <TechBlock icon={tech} name={tech} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  )

  if (!link) {
    return <div className="block">{cardContent}</div>
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      style={{ textDecoration: "none" }}
    >
      {cardContent}
    </a>
  )
}
