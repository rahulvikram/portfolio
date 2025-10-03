import { AuroraText } from "./aurora-text"

interface FancyLinkProps {
    children: React.ReactNode
    href: string
}

export function FancyLink({ children, href }: FancyLinkProps) {
    return (
        <AuroraText speed={1.67} className="font-black">
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        </AuroraText>
    )
}