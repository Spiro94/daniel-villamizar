import { CORE_STACK, EXPERIENCE } from "../utils/experience";
import { useLang } from "../i18n";
import SectionHeader from "./SectionHeader";
import CertificationCard from "./CertificationCard";

export default function ExperienceSection() {
    const { lang, t } = useLang();
    return (
        <section id='experience' className="scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white text-chocolate">
            <div className="max-w-6xl mx-auto">
                <SectionHeader eyebrow={t.experienceEyebrow} title={t.experienceTitle} sub={t.experienceSub} />
                <div className="pt-8">
                    <CertificationCard />
                </div>
                <ol className="mt-10 border-l-2 border-lavender-soft">
                    {EXPERIENCE.map(({ company, role, years, client, achievements }) => (
                        <li key={company} className="relative pl-6 sm:pl-8 pb-8 last:pb-0">
                            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-primary ring-4 ring-white" aria-hidden />
                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                                <h3 className="font-bold text-lg">{role} · <span className="text-primary">{company}</span></h3>
                                <p className="text-sm font-semibold text-chocolate/65 shrink-0">{years.replace('Present', t.present)}</p>
                            </div>
                            {client && <p className="text-sm text-chocolate/65">{t.clientLabel}: {client}</p>}
                            <ul className="mt-2 space-y-1.5 list-disc pl-5 text-sm text-chocolate/75 leading-relaxed">
                                {achievements.map((a) => <li key={a.en}>{a[lang]}</li>)}
                            </ul>
                        </li>
                    ))}
                </ol>
                <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-10">
                    {CORE_STACK.map(({ category, items }) => (
                        <div key={category.en} className="rounded-xl border-2 border-lavender-soft p-4">
                            <dt className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{category[lang]}</dt>
                            <dd className="flex flex-wrap gap-2 pt-3">
                                {items.map((tech) => (
                                    <span key={tech} className="px-3 py-1.5 text-xs font-semibold bg-lavender-soft text-lavender-dark rounded-full">{tech}</span>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
