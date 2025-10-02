import { Ripple } from "@/components/ui/ripple"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Navbar } from "@/components/navbar"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { TextAnimate } from "@/components/ui/text-animate"

export function Landing() {
  return (
    <>
        <div className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
            <FlickeringGrid color="white" maxOpacity={0.1} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
            <div className="relative z-10 flex flex-col items-center">
              <TextAnimate className="text-6xl font-black" animation="slideDown" by="character" duration={2}>
                {/* <h1 className="text-4xl font-black">Rahul Vikram</h1> */}
                Rahul Vikram
              </TextAnimate>
              <TextAnimate className="text-lg" animation="slideUp" by="word" duration={2}>
                {/* <p className="text-lg" style={{ color: "var(--palette-light-blue)" }}>Welcome to my personal website!</p> */}
                Welcome to my personal website!
              </TextAnimate>
            </div>
        </div>
    </>
  )
}

