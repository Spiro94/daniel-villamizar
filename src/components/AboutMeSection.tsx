import { User } from 'lucide-react'
import Logo from '../assets/logo.png'

export default function AboutMeSection() {
    return (
        <section id='about' className='py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden'>
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-linear-to-br from-lavender-soft/20 via-transparent to-primary/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative z-10">
                <div className="relative flex-shrink-0">
                    <img src={Logo} alt="Daniel" className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover ring-4 sm:ring-8 ring-white shadow-lg" />
                </div>
                <div className='flex flex-col gap-4 text-center lg:text-left'>
                    <div className='inline-flex items-center gap-4 justify-center lg:justify-start'>
                        <User size={20} className="text-primary" />
                        <h1 className="text-2xl sm:text-3xl font-bold text-chocolate tracking-tight">About Me</h1>
                    </div>
                    <p className='text-chocolate/70 max-w-prose text-base sm:text-lg leading-relaxed'>
                        Hi, I'm <strong className="text-chocolate font-semibold">Daniel</strong>. I am a passionate Senior Flutter Developer focused on creating high-impact mobile solutions for iOS and Android. With over 6 years of software development experience spanning mobile, web, and enterprise applications, I specialize in architecting scalable applications that deliver exceptional user experiences.
                    </p>
                    <p className='text-chocolate/70 max-w-prose text-base sm:text-lg leading-relaxed'>
                        My philosophy is simple: write clean code, solve real problems, and never stop learning. Currently specializing in <span className="text-primary font-medium">Flutter, Dart, mobile architecture, and cloud integrations</span> with expertise in AI integration, design systems, and cross-platform development.
                    </p>
                </div>
            </div>
        </section>
    )
}