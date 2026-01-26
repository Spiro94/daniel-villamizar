import { ArrowRight } from 'lucide-react'
import Button from '../components/Button'


export default function Home() {
    return (
        <>
            <main
                className="
        relative isolate
        h-svh
        bg-cover bg-center 
bg-linear-to-br from-green to-green-light
        pt-20
      "
            >
                <div className="relative z-10 mx-auto flex flex-col gap-4 h-full max-w-6xl items-center justify-center px-6  text-white">
                    <h1 className='font-display text-9xl font-extrabold'>
                        Daniel Villamizar
                    </h1>
                    <p className='font-display font-extralight text-xl px-20 text-shadow-white text-center mb-8'>
                        Full Stack Developer | Building Scalable Digital Experiences with modern technology and elegant code
                    </p>
                    <Button type='secondary' >Get In Touch <ArrowRight /></Button>
                </div>
            </main>
        </>
    )
}
