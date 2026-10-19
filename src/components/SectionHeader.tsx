export default function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
    return (
        <div className='max-w-3xl space-y-4'>
            <p className='text-xs font-semibold tracking-[0.2em] text-primary'>{eyebrow}</p>
            <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl text-chocolate tracking-tight leading-tight'>{title}</h2>
            {sub && <p className='text-base sm:text-lg text-chocolate/70 leading-relaxed'>{sub}</p>}
        </div>
    )
}
