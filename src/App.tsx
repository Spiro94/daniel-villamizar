import { useState } from 'react'
import AboutMeSection from './components/AboutMeSection'
import MainSection from './components/MainSection'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <MainSection />
      <AboutMeSection />
      <ProjectsSection />
    </>
  )
}

export default App
