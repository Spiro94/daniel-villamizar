import { Code2, Database, Server, Smartphone, User } from 'lucide-react'

const skills = [
    { icon: Smartphone, label: 'Flutter & Dart', detail: 'iOS & Android' },
    { icon: Code2, label: 'React / TypeScript', detail: 'Web & Frontend' },
    { icon: Code2, label: '.NET / C#', detail: 'Backend & APIs' },
    { icon: Server, label: 'Node.js', detail: 'APIs & Services' },
    { icon: Database, label: 'Oracle / PostgreSQL', detail: 'Databases' },
]

export default function AboutMeSection() {
    return (
        <section id='about' className='py-12 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden'>
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-linear-to-br from-lavender-soft/20 via-transparent to-primary/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-lavender/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-20 relative z-10">
                {/* Text */}
                <div className='flex flex-col gap-6 text-center lg:text-left lg:flex-1'>
                    <div className='inline-flex items-center gap-3 justify-center lg:justify-start'>
                        <User size={20} className="text-primary" />
                        <h2 className="text-2xl sm:text-3xl font-bold text-chocolate tracking-tight">About Me</h2>
                    </div>
                    <p className='text-chocolate/70 max-w-prose text-base sm:text-lg leading-relaxed'>
                        Hi, I'm <strong className="text-chocolate font-semibold">Daniel</strong> — a fullstack developer with <span className="text-primary font-medium">8+ years of experience</span> building products across mobile, web, and backend. I started my career in enterprise software and grew into a specialist who can own an entire product stack.
                    </p>
                    <p className='text-chocolate/70 max-w-prose text-base sm:text-lg leading-relaxed'>
                        My deepest expertise is in <span className="text-primary font-medium">Flutter</span>, where I've shipped production apps for iOS and Android — from architecture to App Store. I pair that with solid <span className="text-primary font-medium">React & TypeScript</span> skills for web, <span className="text-primary font-medium">Node.js</span> for fast and flexible APIs, and <span className="text-primary font-medium">.NET / C#</span> when the backend needs to be robust and scalable — all backed by experience with <span className="text-primary font-medium">Oracle and PostgreSQL</span> databases.
                    </p>
                    <p className='text-chocolate/70 max-w-prose text-base sm:text-lg leading-relaxed'>
                        My approach is straightforward: write clean code, solve real problems, and deliver work that holds up over time.
                    </p>
                </div>

                {/* Skill cards */}
                <div className='flex flex-col gap-4 w-full lg:w-auto lg:min-w-64'>
                    {skills.map(({ icon: Icon, label, detail }) => (
                        <div key={label} className='flex items-center gap-4 px-5 py-4 rounded-2xl bg-lavender-soft/40 border border-primary/10 hover:border-primary/30 transition-colors'>
                            <div className='flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 shrink-0'>
                                <Icon size={18} className='text-primary' />
                            </div>
                            <div className='text-left'>
                                <p className='font-semibold text-chocolate text-sm'>{label}</p>
                                <p className='text-chocolate/50 text-xs'>{detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}