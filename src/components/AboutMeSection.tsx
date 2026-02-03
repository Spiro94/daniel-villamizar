import { User } from 'lucide-react'
import Logo from '../assets/logo.png'

export default function AboutMeSection() {
    return (
        <section id='about' className='py-24 px-8'>
            <div className="max-w-6xl mx-auto flex items-center justify-center gap-12">
                <div className="relative">
                    <img src={Logo} alt="Daniel" className="w-48 h-48 rounded-full object-cover ring-8 ring-white shadow-lg" />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='inline-flex items-center gap-4'>
                        <User size={20} className="text-primary" />
                        <h1 className="text-3xl font-bold text-chocolate tracking-tight">About Me</h1>
                    </div>
                    <p className='text-chocolate/70 max-w-prose text-lg leading-relaxed'>
                        Hi, I'm <strong className="text-chocolate font-semibold">Daniel</strong>. I am a passionate developer focused on creating high-impact digital solutions. With a background in both design and engineering, I specialize in building applications that are not just functional but also delightful to use.
                    </p>
                    <p className='text-chocolate/70 max-w-prose text-lg leading-relaxed'>
                        My philosophy is simple: write clean code, solve real problems, and never stop learning. Currently specializing in <span className="text-primary font-medium">React, Node.js, and cloud architecture</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}