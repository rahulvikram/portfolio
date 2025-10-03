import './index.css'
import './App.css'
import { Navbar } from '@/components/navbar'
import { Landing } from '@/components/landing'
import { Contact } from '@/components/contact'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App;
