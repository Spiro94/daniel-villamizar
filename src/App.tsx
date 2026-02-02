import AboutMeSection from './components/AboutMeSection'
import MainSection from './components/MainSection'
import NavBar from './components/NavBar'
import ProjectsSection from './components/ProjectsSection'
import TechToolsSection from './components/TechToolsSection'

function App() {

  return (
    <html className='scroll-smooth'>
      <NavBar />
      <MainSection />
      <AboutMeSection />
      <ProjectsSection />
      <TechToolsSection />
    </html>
  )
}

export default App
