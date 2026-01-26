
import { ArrowRight } from 'lucide-react'
import AvailableForWork from './AvailableForWork'
import Button from './Button'

const heroImage = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80'

export default function MainSection() {
    return (
        <main className="relative isolate h-screen bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate">
            <div className="h-full justify-center mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-20 pt-32 lg:flex-row lg:items-center">
                <div className="flex-1 space-y-8">
                    <AvailableForWork />

                    <div className="space-y-6">
                        <h1 className="font-display text-4xl leading-tight sm:text-5xl lg:text-8xl">
                            <span className="text-chocolate">Daniel</span>{' '}
                            <span className="text-primary">Villamizar</span>
                        </h1>
                        <p className="max-w-xl text-xl text-chocolate/70">
                            Software Developer crafting scalable, high-impact digital experiences with precision and modern tech.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button type='secondary'>
                            View Work
                        </Button>
                        <Button type='primary'>Contact Me <ArrowRight className="h-4 w-4" /></Button>
                    </div>
                </div>

                <div className="relative flex-1">
                    <div className="relative mx-auto aspect-4/5 w-full max-w-90 rotate-3 overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-white to-primary/5 shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
                        <img src={heroImage} alt="Abstract 3D art" className="" />
                    </div>
                </div>
            </div>
        </main>
    )
}
