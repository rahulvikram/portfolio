"use client"

import { Section } from "./section"

export function Footer() {
  return (
    <>
        <footer className="flex flex-col gap-2 border-t border-border py-8 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>Made with ❤️ (and React) by Rahul Vikram</p>
            <p>&copy; {new Date().getFullYear()}</p>
        </footer>
    </>
  )
}
