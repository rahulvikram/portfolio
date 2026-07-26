import './index.css'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Navbar } from '@/components/navbar'
import { Landing } from '@/components/landing'
import { Footer } from '@/components/footer'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Work } from '@/components/work'

function App() {
  return (
    <>
      <ScrollProgress className="top-[56px] z-100" />
      <Navbar />
      <main className="mx-auto w-full max-w-3xl px-6">
        <Landing />
        <About />
        <Work />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  )
}

export default App;
