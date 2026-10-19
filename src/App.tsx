import { lazy, Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { FaWhatsapp } from 'react-icons/fa'
import MainSection from './components/MainSection'
import NavBar from './components/NavBar'
import { whatsappUrl } from './utils/constants'
import { useLang } from './i18n'

const AppsSection = lazy(() => import('./components/AppsSection'))
const ProjectsSection = lazy(() => import('./components/ProjectsSection'))
const ServicesSection = lazy(() => import('./components/ServicesSection'))
const ProcessSection = lazy(() => import('./components/ProcessSection'))
const ExperienceSection = lazy(() => import('./components/ExperienceSection'))
const ContactSection = lazy(() => import('./components/ContactSection'))

function App() {
  const { t } = useLang()

  return (
    <div className='scroll-smooth'>
      <NavBar />
      <MainSection />
      <Suspense fallback={null}>
        <AppsSection />
        <ProjectsSection />
        <ServicesSection />
        <ProcessSection />
        <ExperienceSection />
        <ContactSection />
      </Suspense>
      <a
        href={whatsappUrl(t.waHello)}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={t.waFab}
        title={t.waFab}
        className='fixed bottom-5 right-5 z-50 grid place-items-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform'
      >
        <FaWhatsapp className='w-8 h-8' />
      </a>
      <Analytics />
      <SpeedInsights />
    </div>
  )
}

export default App
