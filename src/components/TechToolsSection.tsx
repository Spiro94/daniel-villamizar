import { TECHNOLOGIES } from "../utils/technologies";

export default function TechToolsSection() {
    return (
        <section id='skills' className="py-20 px-8 max-w-6xl mx-auto" >
            <h1 className='font-bold text-4xl pb-12 text-chocolate tracking-tight'>Tech Stack</h1>
            <div className="flex flex-wrap gap-4 px-8 items-center justify-center text-chocolate [&_svg]:h-8 [&_svg]:w-8 [&_svg]:fill-current">
                {
                    TECHNOLOGIES.map((technology) => {
                        return <div className="inline-flex gap-4 items-center font-medium bg-white border-2 border-lavender-soft p-4 rounded-2xl shadow-lg hover:border-lavender hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer" key={technology.name}>{technology.name}{technology.icon}</div>
                    })
                }
            </div>
        </section>
    )
}