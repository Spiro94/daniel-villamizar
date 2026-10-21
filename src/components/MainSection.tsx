import { ArrowRight, Check, FileText } from 'lucide-react'
import { FaAndroid, FaGithub, FaLinkedin } from 'react-icons/fa'
import CuentitosHome from '../assets/cuentitos-home.webp'
import Daniel from '../assets/daniel.webp'
import AvailableForWork from './AvailableForWork'
import Button from './Button'
import CertificationCard from './CertificationCard'
import { useLang } from '../i18n'
import { APP_CONSTANTS, whatsappUrl } from '../utils/constants'

const NAMES = ['Panasonic · Yohana', 'Bancolombia', 'Byrider', 'Leal', 'Gorilla Logic', 'Capgemini']
const HIRE_LINKS = [
    { href: APP_CONSTANTS.cvUrl, label: 'CV', Icon: FileText },
    { href: APP_CONSTANTS.linkedInUrl, label: 'LinkedIn', Icon: FaLinkedin },
    { href: APP_CONSTANTS.githubUrl, label: 'GitHub', Icon: FaGithub },
]

export default function MainSection() {
    const { t } = useLang()

    const handleScrollTo = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id='home'>
            <main className="relative isolate flex min-h-screen flex-col bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate">
                <div className="mx-auto flex w-full max-w-6xl flex-1 justify-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 pt-24 sm:pt-32 flex-col lg:flex-row items-center">
                    <div className="flex-1 space-y-8 sm:space-y-10 text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-3">
                            <img src={Daniel} alt="Daniel Villamizar" width={48} height={48} className="lg:hidden w-12 h-12 rounded-full object-cover object-top ring-2 ring-white shadow-md" />
                            <AvailableForWork />
                        </div>

                        <div className="space-y-6">
                            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                                {t.heroTitle}{' '}
                                <span className="bg-linear-to-r from-primary via-lavender to-primary bg-clip-text text-transparent">
                                    {t.heroHighlight}
                                </span>
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-chocolate/80 font-medium leading-relaxed">
                                {t.heroSub}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Button type='primary' onClick={() => window.open(whatsappUrl(t.waHello), '_blank', 'noopener')}>
                                {t.heroCtaPrimary} <ArrowRight className="h-4 w-4" />
                            </Button>
                            <Button type='secondary' onClick={() => handleScrollTo('apps')}>{t.heroCtaSecondary}</Button>
                        </div>

                        <div className="flex justify-center lg:hidden">
                            <CertificationCard />
                        </div>

                        <ul className="flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-sm font-medium text-chocolate/75">
                            {[t.chipYears, t.chipStores, t.chipDirect, t.chipOwn].map((chip) => (
                                <li key={chip} className="inline-flex items-center gap-1.5"><Check className="w-4 h-4 text-green-dark" />{chip}</li>
                            ))}
                        </ul>

                        <p className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-chocolate/70">
                            {t.fullTime}
                            {HIRE_LINKS.map(({ href, label, Icon }) => (
                                <a key={label} href={href} target='_blank' rel='noopener noreferrer' className="inline-flex items-center gap-1 font-semibold text-chocolate underline-offset-4 hover:underline hover:text-primary">
                                    <Icon className="w-4 h-4" />{label}
                                </a>
                            ))}
                        </p>

                    </div>

                    <div className="relative hidden lg:block flex-1">
                        <div className="relative mx-auto aspect-4/5 w-full max-w-64 sm:max-w-72 lg:max-w-104 rotate-3 overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-white to-primary/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                            <img
                                src={Daniel}
                                alt="Daniel Villamizar"
                                className="w-full h-full object-cover"
                                width={1040}
                                height={1560}
                                loading="eager"
                                fetchPriority="high"
                            />
                        </div>

                        <div className="absolute -left-6 bottom-10 w-44 rounded-[1.75rem] border-[6px] border-chocolate bg-chocolate shadow-2xl overflow-hidden">
                            <img src={CuentitosHome} alt="Cuentitos app" className="aspect-[1320/2868] w-full object-cover object-top" loading="lazy" />
                            <span className="absolute bottom-2 left-2 right-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-white/95 px-2 py-1 text-[11px] font-semibold text-chocolate">
                                <FaAndroid className="text-green-dark" /> {t.heroCardBeta}
                            </span>
                        </div>
                        <div className="absolute right-0 -top-4 xl:-right-8">
                            <CertificationCard />
                        </div>
                    </div>
                </div>

                <div className="border-y border-lavender-soft bg-white/60 py-5">
                    <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-chocolate/65 pb-4 px-4">{t.trustedBy}</p>
                    <div className="overflow-hidden mask-x-from-90% mask-x-to-100%">
                        <div className="flex w-max gap-12 animate-marquee font-display font-bold text-xl sm:text-2xl text-chocolate/65">
                            {[...NAMES, ...NAMES].map((name, i) => <span key={i} aria-hidden={i >= NAMES.length}>{name}</span>)}
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}
