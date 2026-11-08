"use client"

import { TechTags } from "../tech-tags"
import { handleHover } from "@/lib/confetti"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

export type Winner = Readonly<{
  placement: string // e.g. "1st Place"
  track: string // e.g. "Best Use of Gemini"
  hackathon: string // e.g. "DubHacks 2026"
}>

type ProjectCardProps = Readonly<{
  title: string
  description: string
  image?: string
  link: string
  technologies: string[]
  winner?: Winner
}>

export function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
  winner,
}: ProjectCardProps) {
  const content = (
    <>
      {image && (
        <div className="relative mb-3 h-36 w-full overflow-hidden rounded-sm">
          <img
            src={image}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      {winner && (
        <span className="award-corner" aria-label="Winner">
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="award-ribbon">Winner</span>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              sideOffset={-4}
              className="border-[0.5px] border-[#c9962f]/70 bg-popover text-popover-foreground shadow-md"
            >
              <span className="font-bold text-[#b8861f] dark:text-[#e0b552]">
                {winner.placement}
              </span>
              {` - ${winner.track} @ ${winner.hackathon}`}
            </TooltipContent>
          </Tooltip>
        </span>
      )}
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <TechTags items={technologies} className="mt-3" />
    </>
  )

  const className = `flex h-full flex-col border border-border bg-card p-4 transition-[color,box-shadow,border-color]${
    winner ? " award-card" : ""
  }`

  if (!link) {
    return (
      <div className={className} onMouseEnter={winner ? handleHover : undefined}>
        {content}
      </div>
    )
  }

  return (
    <a
      href={link}
      onMouseEnter={winner ? handleHover : undefined}
      target="_blank"
      rel="noopener noreferrer"
      className={`${className} hover:border-muted-foreground/40 hover:shadow-md`}
    >
      {content}
    </a>
  )
}
