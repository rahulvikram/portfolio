import { Ripple } from "@/components/ui/ripple"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Navbar } from "@/components/navbar"
export function Landing() {
  return (
    <>
        <div className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">
            <FlickeringGrid color="white" maxOpacity={0.15} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-4xl font-bold">Rahul Vikram</h1>
                <p className="text-lg">Welcome to my personal website!</p>
            </div>
        </div>
    </>
  )
}
