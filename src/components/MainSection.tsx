
import { ArrowRight } from 'lucide-react'
import Daniel from '../assets/daniel.jpeg'
import AvailableForWork from './AvailableForWork'
import Button from './Button'

export default function MainSection() {
    return (
        <section id='home'>
            <main className="relative isolate min-h-screen bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate">
                <div className="min-h-screen justify-center mx-auto flex max-w-6xl gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20 pt-20 sm:pt-32 flex-col lg:flex-row items-center">
                    <div className="flex-1 space-y-12 sm:space-y-16 text-center lg:text-left">
                        <div className="flex justify-center lg:justify-start">
                            <AvailableForWork />
                        </div>

                        <div className="space-y-8 sm:space-y-10">
                            <h1 className="flex flex-col font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none gap-0 tracking-tight">
                                <span className="text-chocolate">Daniel</span>
                                <span className="bg-linear-to-r from-primary via-lavender to-primary bg-clip-text text-transparent">Villamizar</span>
                            </h1>
                            <p className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg lg:text-xl text-chocolate/80 font-medium leading-relaxed">
                                Senior Flutter Developer crafting exceptional mobile experiences for iOS and Android with 6+ years of expertise in scalable architecture and AI integration.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4">
                            <Button type='secondary'>
                                View Work
                            </Button>
                            <Button type='primary'>Contact Me <ArrowRight className="h-4 w-4" /></Button>
                        </div>
                    </div>

                    <div className="relative flex-1 w-full max-w-md lg:max-w-none">
                        <div className="relative mx-auto aspect-4/5 w-full max-w-72 sm:max-w-80 md:max-w-96 lg:max-w-130 rotate-3 overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-white to-primary/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                            <img src={Daniel} alt="Daniel Villamizar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </main>
        </section>

    )
}
