import { TECHNOLOGIES } from "../utils/technologies";

export default function TechToolsSection() {
    return (
        <section id='skills' className="py-20 px-8 max-w-6xl mx-auto" >
            <h1 className='font-bold text-2xl pb-12'>Tech Stack</h1>
            <div className="flex flex-wrap gap-4 px-8 items-center justify-center text-stone-700 [&_svg]:h-8 [&_svg]:w-8 [&_svg]:fill-current">
                {
                    TECHNOLOGIES.map((technology) => {
                        return <div className="inline-flex gap-4 items-center bg-lavender-soft p-3 rounded-2xl shadow-xl hover:bg-lavender-light hover:translate-y-px cursor-pointer" key={technology.name}>{technology.name}{technology.icon}</div>
                    })
                }
            </div>
        </section>
    )
}