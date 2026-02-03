import AboutMeSection from './components/AboutMeSection'
import ContactSection from './components/ContactSection'
import ExperienceSection from './components/ExperienceSection'
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
      <ExperienceSection />
      <ContactSection />
    </html>
  )
}

export default App
