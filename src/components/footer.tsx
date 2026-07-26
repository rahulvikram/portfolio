"use client"

import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>Made with ❤️ (and React) by Rahul Vikram</p>
      <div className="flex items-center gap-5">
        <Link
          to="/v1"
          className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
        >
          v1 of this site
        </Link>
        <p>&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
