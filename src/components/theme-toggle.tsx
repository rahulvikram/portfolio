import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme"

export function ThemeToggle({ className = "" }: Readonly<{ className?: string }>) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className={`text-muted-foreground hover:text-foreground transition-colors ${className}`}
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  )
}
