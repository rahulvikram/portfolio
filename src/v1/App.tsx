import { Navbar } from '@v1/components/navbar'
import { Landing } from '@v1/components/landing'
import { Contact } from '@v1/components/contact'
import { About } from '@v1/components/about'
import { Projects } from '@v1/components/projects'
import { Skills } from '@v1/components/skills'
import { Work } from '@v1/components/work'
import { FlickeringGrid } from './components/ui/flickering-grid'

function App() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-80 animate-fade-in duration-4000">
        <FlickeringGrid
          squareSize={16}
          gridGap={12}
          flickerChance={0.15}
          targetFps={24}
          color="white"
          maxOpacity={0.03}
          className="pointer-events-none"
        />
      </div>
      <Landing />
      <About />
      <Work />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App;
