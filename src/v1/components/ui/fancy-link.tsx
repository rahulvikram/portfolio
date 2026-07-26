import { AuroraText } from "./aurora-text"

interface FancyLinkProps {
    children: React.ReactNode
    href: string
}

export function FancyLink({ children, href }: FancyLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <AuroraText speed={1.67} className="font-bold" colors={["#0070F3", "#38bdf8", "#0070F3", "#38bdf8"]}>
                {children}
            </AuroraText>
        </a>
    )
}