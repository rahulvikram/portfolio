import './index.css'
import './App.css'
import { Navbar } from '@/components/navbar'
import { Landing } from '@/components/landing'
import { Contact } from '@/components/contact'

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Contact />
    </>
  )
}

export default App;
