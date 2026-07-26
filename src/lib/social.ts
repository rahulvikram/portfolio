import { Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"

const email = import.meta.env.VITE_EMAIL

export const socialLinks = [
  {
    name: "GitHub",
    label: "GitHub",
    url: "https://github.com/rahulvikram/",
    icon: GitHubIcon,
    color: "#4d1ab8",
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-vikram/",
    icon: LinkedInIcon,
    color: "#0A66C2",
  },
  {
    name: "Email",
    label: "Send me an Email",
    url: `mailto:${email}`,
    icon: Mail,
    color: "#EA4335",
  },
]
