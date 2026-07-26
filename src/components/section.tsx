import type { ReactNode } from "react"

type SectionProps = Readonly<{
  id: string
  title: string
  children: ReactNode
}>

export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-14 border-t border-border py-12">
      <h2 className="mb-6 text-lg font-medium tracking-tight">{title}</h2>
      {children}
    </section>
  )
}
