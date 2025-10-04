import './index.css'
import './App.css'
import { Navbar } from '@/components/navbar'
import { Landing } from '@/components/landing'
import { Contact } from '@/components/contact'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'
import { FlickeringGrid } from './components/ui/flickering-grid'
function App() {
  return (
    <>
      <Navbar />
      <div className="fixed inset-0 pointer-events-none z-0 opacity-80 animate-fade-in duration-4000">
        <FlickeringGrid squareSize={12} color="white" maxOpacity={0.03} className="pointer-events-none" />
      </div>
      <Landing />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App;
