"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

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
      <Card className="relative max-w-md shadow-none cursor-pointer transition-transform hover:scale-[1.02] active:scale-100">
        <CardHeader>
          <img
            src={image}
            alt={title}
            width={500}
            height={500}
            className="rounded-lg object-cover"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-2xl font-extrabold text-black">{title}</CardTitle>
          <CardDescription className="mb-2">{description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              // TODO: add tech stack icons in a row
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
