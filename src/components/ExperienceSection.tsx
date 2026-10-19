import { CORE_STACK, EXPERIENCE_HIGHLIGHTS } from "../utils/experience";
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
                <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-4 sm:gap-6">
                    {EXPERIENCE_HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                        <div key={title.en} className="flex gap-4 rounded-xl border-2 border-lavender-soft p-6">
                            <Icon className="w-9 h-9 p-2 shrink-0 rounded-lg bg-primary/10 text-primary" />
                            <div className="space-y-1.5">
                                <h3 className="font-bold text-lg">{title[lang]}</h3>
                                <p className="text-sm text-chocolate/70 leading-relaxed">{description[lang]}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-8">
                    {CORE_STACK.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs font-semibold bg-lavender-soft text-lavender-dark rounded-full">{tech}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}
