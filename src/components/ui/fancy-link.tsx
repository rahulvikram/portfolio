interface FancyLinkProps {
    children: React.ReactNode
    href: string
}

export function FancyLink({ children, href }: Readonly<FancyLinkProps>) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-link underline decoration-link/40 underline-offset-2 transition-colors hover:decoration-link"
        >
            {children}
        </a>
    )
}
