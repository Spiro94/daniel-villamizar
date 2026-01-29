import { User } from 'lucide-react'
import Logo from '../assets/logo.png'

export default function AboutMeSection() {
    return (
        <section className='py-24 px-8'>
            <div className="max-w-8xl w-full mx-auto flex items-center justify-center gap-12">
                <div className="relative">
                    <img src={Logo} alt="Daniel" className="w-48 h-48 rounded-full object-cover ring-8 ring-white shadow-lg" />
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='inline-flex items-center gap-4'>
                        <User size={20} className="text-indigo-600" />
                        <h1 className="text-2xl font-semibold">About Me</h1>
                    </div>
                    <p className='text-gray-600 max-w-prose'>
                        Hi, I'm <strong>Daniel</strong>. I am a passionate developer focused on creating high-impact digital solutions. With a background in both design and engineering, I specialize in building applications that are not just functional but also delightful to use.
                    </p>
                    <p className='text-gray-600 max-w-prose'>
                        My philosophy is simple: write clean code, solve real problems, and never stop learning. Currently specializing in React, Node.js, and cloud architecture.
                    </p>
                </div>
            </div>
        </section>
    )
}