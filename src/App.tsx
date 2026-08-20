import { lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import MainSection from './components/MainSection'
import NavBar from './components/NavBar'

const AboutMeSection = lazy(() => import('./components/AboutMeSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const TechToolsSection = lazy(() => import('./components/TechToolsSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

function App() {

  return (
    <div className='scroll-smooth'>
      <NavBar />
      <MainSection />
      <Suspense fallback={null}>
        <AboutMeSection />
        <ProjectsSection />
        <TechToolsSection />
        <ExperienceSection />
        <ContactSection />
      </Suspense>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
