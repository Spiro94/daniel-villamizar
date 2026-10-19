import { ArrowRight } from 'lucide-react'
import { PICK_SERVICE, SERVICES } from '../utils/services'
import SectionHeader from './SectionHeader'
import { useLang } from '../i18n'

export default function ServicesSection() {
    const { lang, t } = useLang()

    const ask = (id: string) => {
        window.dispatchEvent(new CustomEvent(PICK_SERVICE, { detail: id }))
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }

    const stats = [['8+', t.statYears], [t.statUsers, t.statApps], ['100%', t.statStores], ['1:1', t.statDirect]]

    return (
        <section id='services' className='scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white text-chocolate'>
            <div className='max-w-6xl mx-auto'>
                <SectionHeader eyebrow={t.servicesEyebrow} title={t.servicesTitle} />
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pt-10 gap-4 sm:gap-6'>
                    {SERVICES.map(({ id, icon: Icon, title, description }) => (
                        <div key={id} className='flex flex-col gap-3 rounded-xl border-2 border-lavender-soft p-6 hover:border-lavender hover:shadow-xl transition-all duration-300'>
                            <Icon className='w-9 h-9 p-2 rounded-lg bg-primary/10 text-primary' />
                            <h3 className='font-bold text-lg'>{title[lang]}</h3>
                            <p className='text-sm text-chocolate/70 leading-relaxed flex-1'>{description[lang]}</p>
                            <button onClick={() => ask(id)} className='self-start inline-flex items-center gap-1.5 text-sm font-semibold text-tangerine-dark hover:underline underline-offset-4 cursor-pointer'>
                                {t.askAbout} <ArrowRight className='w-4 h-4' />
                            </button>
                        </div>
                    ))}
                </div>

                <dl className='mt-14 grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-2xl bg-chocolate text-white p-8'>
                    {stats.map(([value, label]) => (
                        <div key={label} className='flex flex-col-reverse gap-1'>
                            <dt className='text-sm text-white/70'>{label}</dt>
                            <dd className='font-display font-bold text-4xl text-tangerine'>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
