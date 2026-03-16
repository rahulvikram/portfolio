import { TextAnimate } from "@/components/ui/text-animate"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { AuroraText } from "./ui/aurora-text"

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
      <div id="landing" className="relative w-screen min-h-[100svh] max-w-full flex flex-col items-center justify-center overflow-hidden px-4 select-none">
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
        <div className="relative z-10 flex flex-col items-center text-center max-w-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-end mb-1 gap-1 sm:gap-0">
            <TextAnimate
              className="font-black mr-0 sm:mr-4 text-4xl sm:text-7xl leading-none select-none"
              animation="slideDown"
              by="character"
              duration={2}
            >
              Rahul
            </TextAnimate>
            <TextAnimate
              className="font-black text-4xl sm:text-7xl leading-none select-none"
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
          <div className="flex flex-col sm:flex-row items-center">
            <span className="hidden sm:inline-block text-5xl mr-3">‎</span>
            <TypingAnimation pauseDelay={2000} blinkCursor={true} showCursor={false} typeSpeed={100} className="text-2xl sm:text-4xl font-bold" words={["Welcome to my personal website!", "Software Engineer", "Web Developer", "AI Researcher", "Photographer"]} loop />
          </div>
        </div>
      </div>
    </>
  )
}