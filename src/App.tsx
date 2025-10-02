import './index.css'
import './App.css'
import { Navbar } from '@/components/navbar'
import { Landing } from '@/components/landing'
import { Contact } from '@/components/contact'
import { About } from '@/components/about'

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <About />
      <Contact />
    </>
  )
}

export default App;
