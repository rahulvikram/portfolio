import React from "react"
import { Ripple } from "@/components/ui/ripple"
import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { Navbar } from "@/components/navbar"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern"
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern"
import { TextAnimate } from "@/components/ui/text-animate"
import { TypingAnimation } from "@/components/ui/typing-animation"

export function Landing() {
  return (
    <>
        <div className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0 transition-opacity duration-2000 opacity-100 animate-fade-in">
              <FlickeringGrid color="white" maxOpacity={0.1} />
            </div>
            <style>
              {`
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 1; }
                }
                .animate-fade-in {
                  animation: fade-in 2s ease-in;
                }
              `}
            </style>
            <div className="relative z-10 flex flex-col items-center">
              <TextAnimate className="text-9xl font-black" animation="slideDown" by="character" duration={2}>
                {/* <h1 className="text-4xl font-black">Rahul Vikram</h1> */}
                Rahul Vikram
              </TextAnimate>
              {(() => {
                const [show, setShow] = React.useState(true);
                
                React.useEffect(() => {
                  const timer = setTimeout(() => setShow(false), 5000);
                  return () => clearTimeout(timer);
                }, []);

                return show ? (
                  <TextAnimate className="text-3xl" animation="slideUp" by="word" duration={2}>
                    Welcome to my personal website!
                  </TextAnimate>
                ) : <TypingAnimation className="text-3xl" words={["Software Engineer", "Web Developer", "Machine Learning Researcher", "Photographer"]} loop />;
              })()}
            </div>
        </div>
    </>
  )
}

