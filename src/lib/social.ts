import { Mail } from "lucide-react"
import { GitHubIcon, LinkedInIcon } from "@/components/icons"

const email = import.meta.env.VITE_EMAIL

export const socialLinks = [
  {
    name: "GitHub",
    label: "GitHub",
    url: "https://github.com/rahulvikram/",
    icon: GitHubIcon,
  },
  {
    name: "LinkedIn",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/rahul-vikram/",
    icon: LinkedInIcon,
  },
  {
    name: "Email",
    label: "Send me an Email",
    url: `mailto:${email}`,
    icon: Mail,
  },
]
