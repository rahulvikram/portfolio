import { FlickeringGrid } from "@/components/ui/flickering-grid"
import { TextAnimate } from "@/components/ui/text-animate"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AuroraText } from "./ui/aurora-text"
import { WordRotate } from "@/components/ui/word-rotate"
import { Ripple } from "@/components/ui/ripple"

/*
        <div id="landing" className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
-           <div className="fixed inset-0 w-full h-full z-0 opacity-40 animate-fade-in duration-4000">
-             <FlickeringGrid squareSize={12} color="white" maxOpacity={0.03} />
           <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 animate-fade-in duration-4000">
             <FlickeringGrid squareSize={12} color="white" maxOpacity={0.03} className="pointer-events-none" />
            </div>
*/

export function Landing() {
  return (
    <>
        <div id="landing" className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-40 animate-fade-in duration-4000">
              <FlickeringGrid squareSize={12} color="white" maxOpacity={0.03} className="pointer-events-none" />
            </div>
            <style>
              {`
                @keyframes fade-in {
                  from { opacity: 0; }
                  to { opacity: 0.4; }
                }
                .animate-fade-in {
                  animation: fade-in 2s ease-in;
                }
              `}
            </style>
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex flex-row items-center mb-1">
                <TextAnimate
                  className="text-9xl font-black mr-5"
                  animation="slideDown"
                  by="character"
                  duration={2}
                >
                  Rahul
                </TextAnimate>
                <TextAnimate
                  className="text-9xl font-black"
                  animation="slideDown"
                  by="character"
                  duration={2}
                  renderSegment={(seg) => (
                    <AuroraText speed={1.67}>
                      {seg}
                    </AuroraText>
                  )}
                >
                  Vikram
                </TextAnimate>
              </div>
              <div className="flex flex-row items-center">
                <span className="text-5xl mr-3">‎</span>
                <TypingAnimation typeSpeed={100} className="text-5xl font-bold" words={["Welcome to my personal website!", "Software Engineer", "Web Developer", "AI Researcher", "Photographer", "Clash Royale Lover"]} loop />
              </div>
            </div>
        </div>
    </>
  )
}

