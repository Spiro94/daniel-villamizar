import { TECHNOLOGIES } from "../utils/technologies";

export default function TechToolsSection() {
    return (
        <section id='skills' className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-lavender-soft/30 via-background-light to-lavender-soft/30 relative overflow-hidden">
            {/* Decorative background grid pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4A4A4A 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <h1 className='font-bold text-3xl sm:text-4xl pb-8 sm:pb-12 text-chocolate tracking-tight text-center lg:text-left'>Tech Stack</h1>
                <div className="flex flex-wrap gap-3 sm:gap-4 px-0 sm:px-4 lg:px-8 items-center justify-center text-chocolate [&_svg]:h-6 [&_svg]:w-6 sm:[&_svg]:h-8 sm:[&_svg]:w-8 [&_svg]:fill-current">
                    {
                        TECHNOLOGIES.map((technology) => {
                            return <div className="inline-flex gap-2 sm:gap-4 items-center text-sm sm:text-base font-medium bg-white border-2 border-lavender-soft p-3 sm:p-4 rounded-2xl shadow-lg hover:border-lavender hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer" key={technology.name}>{technology.name}{technology.icon}</div>
                        })
                    }
                </div>
            </div>
        </section>
    )
}