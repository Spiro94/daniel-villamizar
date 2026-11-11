import { ArrowLeft, Download, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Daniel from '../assets/daniel.webp'
import { APP_CONSTANTS } from '../utils/constants'
import { PROJECTS } from '../utils/projects'
import CertificationCard from './CertificationCard'
import ExperienceSection from './ExperienceSection'
import ProjectCard from './ProjectCard'
import SectionHeader from './SectionHeader'

// English-only page for recruiters and hiring managers. Keep the headline and summary in sync with cv/main.tex.
const HEADLINE = 'Senior Mobile Engineer | Flutter, Dart, Rust, React | Design Systems & Local-first Apps | Claude Certified Architect'

const FACTS = [
    ['8+ years', 'building production apps'],
    ['50K+', 'customers on apps I shipped'],
    ['3 apps', 'of my own in closed beta'],
    ['Remote', 'Colombia · UTC−5'],
]

const primary = 'inline-flex items-center gap-2 rounded-full px-5 py-3 font-semibold shadow-[0_8px_24px_rgba(15,14,19,0.18)] transition-all hover:scale-105'
const iconLink = 'inline-flex items-center gap-1.5 font-semibold text-chocolate/80 hover:text-primary underline-offset-4 hover:underline'

function ContactLinks({ center = false }: { center?: boolean }) {
    return (
        <div className={`flex flex-wrap items-center justify-center gap-4 ${center ? '' : 'lg:justify-start'}`}>
            <a href={APP_CONSTANTS.cvUrl} target="_blank" rel="noopener noreferrer" className={`${primary} bg-tangerine hover:bg-golden text-chocolate`}>
                <Download className="w-4 h-4" /> Download CV
            </a>
            <a href={`mailto:${APP_CONSTANTS.email}`} className={`${primary} bg-chocolate hover:bg-chocolate/90 text-white`}>
                <Mail className="w-4 h-4" /> Email me
            </a>
            <a href={APP_CONSTANTS.linkedInUrl} target="_blank" rel="noopener noreferrer" className={iconLink}><FaLinkedin className="w-5 h-5" />LinkedIn</a>
            <a href={APP_CONSTANTS.githubUrl} target="_blank" rel="noopener noreferrer" className={iconLink}><FaGithub className="w-5 h-5" />GitHub</a>
        </div>
    )
}

export default function HirePage() {
    const clientWork = PROJECTS.filter((p) => p.role)

    return (
        <div className="text-chocolate">
            <header className="absolute top-0 inset-x-0 z-10">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-5 text-sm font-semibold">
                    <a href="/" className="inline-flex items-center gap-1.5 text-chocolate/75 hover:text-primary"><ArrowLeft className="w-4 h-4" />danielvillamizar.dev</a>
                    <nav className="hidden sm:flex gap-5 text-chocolate/75">
                        <a href="#work" className="hover:text-primary">Work</a>
                        <a href="#experience" className="hover:text-primary">Experience</a>
                        <a href="#contact" className="hover:text-primary">Contact</a>
                    </nav>
                </div>
            </header>

            <main className="bg-linear-to-br from-background-light via-white to-lavender-soft">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-14 sm:pb-20">
                    <div className="flex-1 space-y-7 text-center lg:text-left">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Senior Mobile Engineer · Remote</p>
                        <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05]">Daniel Villamizar</h1>
                        <p className="font-semibold text-chocolate/85 leading-relaxed">{HEADLINE}</p>
                        <p className="max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-chocolate/75 leading-relaxed">
                            8+ years building cross-platform products with Flutter and Dart for banking, auto finance, loyalty and consumer brands,
                            including Bancolombia, Byrider and Panasonic (Yohana). I redesigned and migrated Byrider's customer app from Xamarin to
                            Flutter for 50K+ customers, built components for Bancolombia's enterprise design system, and developed a local-first
                            Rust core (Axum, Actix Web, Tauri) shared across mobile and desktop. As a Claude Certified Architect, I ship production
                            AI features with Claude and OpenAI.
                        </p>
                        <ContactLinks />
                    </div>
                    <div className="flex flex-col items-center gap-5 shrink-0">
                        <img src={Daniel} alt="Daniel Villamizar" width={1040} height={1560} loading="eager" fetchPriority="high"
                            className="w-48 sm:w-60 lg:w-72 aspect-4/5 object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5" />
                        <CertificationCard />
                    </div>
                </div>
                <dl className="border-y border-lavender-soft bg-white/60">
                    <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-8 py-8 text-center">
                        {FACTS.map(([value, label]) => (
                            <div key={label}>
                                <dt className="font-display font-bold text-2xl sm:text-3xl">{value}</dt>
                                <dd className="text-sm text-chocolate/70">{label}</dd>
                            </div>
                        ))}
                    </div>
                </dl>
            </main>

            <section id="work" className="scroll-mt-6 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-white to-lavender-soft">
                <div className="max-w-6xl mx-auto">
                    <SectionHeader eyebrow="SELECTED WORK" title="Apps used by thousands" sub="Client products I built as a senior engineer, and what I did on each one." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-4 sm:gap-6">
                        {clientWork.map((project) => <ProjectCard key={project.name} project={project} />)}
                    </div>
                    <p className="pt-8 text-sm text-chocolate/70">
                        I also build and run my own apps: <a href="/#apps" className="font-semibold text-primary hover:underline underline-offset-4">Habit Heroes, CitaMente and Cuentitos</a>.
                    </p>
                </div>
            </section>

            <ExperienceSection />

            <section id="contact" className="scroll-mt-6 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-white to-lavender-soft">
                <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
                    <p className="text-xs font-semibold tracking-[0.2em] text-primary">CONTACT</p>
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight">Let's talk about the role</h2>
                    <p className="text-chocolate/75 text-lg">The fastest way to reach me is email: <a href={`mailto:${APP_CONSTANTS.email}`} className="font-semibold text-primary hover:underline underline-offset-4">{APP_CONSTANTS.email}</a></p>
                    <ContactLinks center />
                    <p className="pt-8 text-sm text-chocolate/65">&copy;{new Date().getFullYear()} Daniel Villamizar</p>
                </div>
            </section>
        </div>
    )
}
