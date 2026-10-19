import { PROCESS_STEPS } from '../utils/services'
import SectionHeader from './SectionHeader'
import { useLang } from '../i18n'

export default function ProcessSection() {
    const { lang, t } = useLang()
    return (
        <section id='process' className='scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate'>
            <div className='max-w-6xl mx-auto'>
                <SectionHeader eyebrow={t.processEyebrow} title={t.processTitle} sub={t.processSub} />
                <ol className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-10 gap-4 sm:gap-6'>
                    {PROCESS_STEPS.map((s, i) => (
                        <li key={i} className='flex flex-col gap-3 rounded-xl bg-white p-6 shadow-md'>
                            <span className='text-xs font-semibold tracking-[0.2em] uppercase text-primary'>{t.step} {i + 1}</span>
                            <h3 className='font-bold text-lg'>{s.title[lang]}</h3>
                            <p className='text-sm text-chocolate/70 leading-relaxed flex-1'>{s.description[lang]}</p>
                            <span className='self-start text-xs font-semibold bg-lavender-soft text-lavender-dark rounded-full px-3 py-1'>{s.when[lang]}</span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
