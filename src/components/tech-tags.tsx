import { TechIcon } from "./tech-icon"

/**
 * Small technology logos next to each tag name across work, projects, and
 * skills. 1 = show logos, 0 = names only.
 */
const SHOW_LOGOS: 0 | 1 = 1

type TechTagsProps = Readonly<{
  items: string[]
  className?: string
}>

export function TechTags({ items, className = "" }: TechTagsProps) {
  return (
    <ul className={`flex flex-wrap gap-x-3 gap-y-1 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground"
        >
          {SHOW_LOGOS === 1 && <TechIcon name={item} />}
          {item}
        </li>
      ))}
    </ul>
  )
}
