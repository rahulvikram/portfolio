"use client"

import { TechTags } from "../tech-tags"

type ProjectCardProps = Readonly<{
  title: string
  description: string
  image?: string
  link: string
  technologies: string[]
}>

export function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
}: ProjectCardProps) {
  const content = (
    <>
      {image && (
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="mb-3 h-36 w-full rounded-sm object-cover"
        />
      )}
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <TechTags items={technologies} className="mt-3" />
    </>
  )

  const className = "flex h-full flex-col border border-border bg-card p-4 transition-colors"

  if (!link) {
    return <div className={className}>{content}</div>
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:border-muted-foreground/40`}
    >
      {content}
    </a>
  )
}
