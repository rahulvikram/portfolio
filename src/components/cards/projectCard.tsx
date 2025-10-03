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
      <Card
        className="border-none bg-gray-900 relative max-w-2xl w-full shadow-none cursor-pointer transition-transform hover:scale-[1.03] active:scale-100 min-h-[540px] min-w-[380px] p-2"
        style={{
          background:
            "linear-gradient(135deg, #0070F3 0%, #38bdf8 33%, #0070F3 66%, #38bdf8 100%)",
        }}
      >
        <CardHeader>
          <img
            src={image}
            alt={title}
            width={700}
            height={420}
            className="rounded-lg object-cover w-full h-[320px] max-h-[340px]"
          />
        </CardHeader>
        <CardContent>
          <CardTitle className="text-3xl font-extrabold text-black">{title}</CardTitle>
          <CardDescription className="mb-4 text-lg">{description}</CardDescription>
          <div className="flex flex-wrap gap-3 mt-4">
            {technologies.map((tech) => (
              // TODO: add tech stack icons in a row
              <span key={tech} className="px-3 py-1 bg-black/10 rounded text-base font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
