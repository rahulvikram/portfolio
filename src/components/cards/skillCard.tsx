"use client"

import { TechTags } from "../tech-tags"

type SkillCardProps = Readonly<{
    title: string
    techs: string[]
}>

export function SkillCard({ title, techs }: SkillCardProps) {
    return (
        <div>
            <h3 className="text-sm font-medium">{title}</h3>
            <TechTags items={techs} className="mt-2" />
        </div>
    )
}
