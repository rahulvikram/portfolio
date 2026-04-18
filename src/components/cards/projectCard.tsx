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
        className={`project-card relative bg-black/80 w-md max-w-md border-b border-gray-700 shadow-lg ease-in-out transition-transform transition-colors duration-1000 !py-2 !px-2 !gap-0 ${
          isClickable
            ? "cursor-pointer hover:bg-gray-900 transition-colors duration-100"
       
            : "cursor-default"
        }`}
        style={{
          transition: "background-color 0.5s ease-in, background 0.5s ease-in, transform 0.2s",
        }}
      >
        <CardHeader className="p-3 pb-2">
          {image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="rounded-md object-cover w-full h-56 md:h-80"
            />
          ) : (
            <div className="rounded-md w-full h-40 md:h-52 bg-gradient-to-br from-fuchsia-600/30 via-violet-500/20 to-cyan-400/20 border border-white/10 flex items-end p-4">
              <div className="text-left">
                {title == "Towards Universal Semantics w/ LLMs" ? (
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Research Paper</p>
                ) : (
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">Project</p>
                )}
                <h3 className="text-lg md:text-xl font-extrabold text-white">{title}</h3>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="flex flex-col gap-1 px-3 pb-3">
          <CardTitle className="text-lg md:text-xl font-extrabold text-white">{title}</CardTitle>
          <CardDescription className="mb-1.5 text-white text-xs text-gray-200">{description}</CardDescription>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {technologies.map((tech) => (
              <div key={tech} className="flex text-xs gap-1">
               <TechBlock icon={tech} name={tech} size="sm" />
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
