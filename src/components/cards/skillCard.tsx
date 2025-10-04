"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { TechBlock } from "./techBlock"
import { ColorTechBlock } from "./colorTechblock"
import { Badge } from "../ui/badge"
import { AuroraText } from "../ui/aurora-text"

type SkillCardProps = {
    title: string,
    techs: string[]
}

export function SkillCard({
  title,
  techs,
}: SkillCardProps) {
    let splitTitle = title.split(" ");
    let firstWord = splitTitle[0];
    let secondWord = splitTitle[1];
    let thirdWord = splitTitle[2];
    if (splitTitle[1].length < 2) {
        thirdWord = splitTitle[2];
    }
    return (
    <div className="w-full">
        <Card className="p-6 bg-black/80 hover:shadow-lg w-full gap-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-center gap-3">
                    <div>
                        <AuroraText className="text-3xl font-black mr-2">{firstWord}</AuroraText>
                        <span className="text-3xl font-black">{secondWord} </span>
                        {thirdWord && <span className="text-3xl font-black">{thirdWord}</span>}
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-3">  
                {techs.map((tech) => (
                    <ColorTechBlock icon={tech} name={tech} key={tech} />
                ))}
            </div>
        </Card>
    </div>
    )
}
