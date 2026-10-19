import { Check, Mail } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { APP_CONSTANTS, whatsappUrl } from "../utils/constants";
import { PICK_SERVICE, SERVICES, TIMELINES } from "../utils/services";
import { useLang } from "../i18n";
import SectionHeader from "./SectionHeader";

const field = "w-full rounded-lg border-2 border-lavender-soft bg-white px-4 py-3 text-chocolate focus:border-primary focus:outline-none";

export default function ContactSection() {
    const { lang, t } = useLang();
    const [service, setService] = useState(SERVICES[0].id);

    useEffect(() => {
        const onPick = (e: Event) => setService((e as CustomEvent<string>).detail);
        window.addEventListener(PICK_SERVICE, onPick);
        return () => window.removeEventListener(PICK_SERVICE, onPick);
    }, []);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const serviceTitle = SERVICES.find((s) => s.id === service)!.title[lang];
        const msg = [
            `${t.waGreeting} ${data.get('name')}.`,
            `${t.waService}: ${serviceTitle}`,
            `${t.waTimeline}: ${data.get('timeline')}`,
            '',
            data.get('about'),
        ].join('\n');
        window.open(whatsappUrl(msg), '_blank', 'noopener');
    };

    return (
        <section id='contact' className="scroll-mt-20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-white to-lavender-soft text-chocolate">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
                <div className="flex flex-col gap-8">
                    <SectionHeader eyebrow={t.contactEyebrow} title={t.contactTitle} sub={t.contactSub} />
                    <ul className="flex flex-col gap-3 font-medium">
                        {[t.perk1, t.perk2, t.perk3].map((perk) => (
                            <li key={perk} className="flex gap-2"><Check className="w-5 h-5 shrink-0 text-green-dark" />{perk}</li>
                        ))}
                    </ul>
                </div>

                <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
                    <label className="flex flex-col gap-1.5 text-sm font-semibold">
                        {t.formName}
                        <input name="name" required autoComplete="name" className={field} />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-semibold">
                        {t.formService}
                        <select name="service" value={service} onChange={(e) => setService(e.target.value)} className={field}>
                            {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.title[lang]}</option>)}
                        </select>
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-semibold">
                        {t.formTimeline}
                        <select name="timeline" className={field}>
                            {TIMELINES.map((tl) => <option key={tl.en}>{tl[lang]}</option>)}
                        </select>
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm font-semibold">
                        {t.formAbout}
                        <textarea name="about" required rows={4} placeholder={t.formAboutPlaceholder} className={field} />
                    </label>
                    <button type="submit" className="inline-flex justify-center items-center gap-2 rounded-full bg-tangerine hover:bg-golden text-chocolate font-semibold py-3.5 cursor-pointer shadow-lg transition-colors">
                        <FaWhatsapp className="w-5 h-5" /> {t.formSend}
                    </button>
                    <p className="text-xs text-chocolate/70 text-center">{t.formNote}</p>
                </form>
            </div>

            <div className="max-w-6xl mx-auto mt-16 flex flex-col items-center gap-6 text-center">
                <p className="text-chocolate/70 font-medium">{t.orReach}</p>
                <a
                    href={`mailto:${APP_CONSTANTS.email}`}
                    className="inline-flex gap-3 items-center text-lg font-medium text-chocolate/80 hover:text-primary transition-colors group"
                >
                    <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <span className="underline decoration-primary/30 hover:decoration-primary">{APP_CONSTANTS.email}</span>
                </a>
                <div className="flex flex-wrap justify-center gap-6 items-center">
                    <a href={APP_CONSTANTS.githubUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-chocolate/70 hover:text-chocolate transition-colors" aria-label="GitHub Profile">
                        <FaGithub className="w-7 h-7 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">GitHub</span>
                    </a>
                    <a href={APP_CONSTANTS.linkedInUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-chocolate/70 hover:text-[#0A66C2] transition-colors" aria-label="LinkedIn Profile">
                        <FaLinkedin className="w-7 h-7 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">LinkedIn</span>
                    </a>
                </div>
                <p className="text-chocolate/65 mt-6 font-medium">
                    &copy;{new Date().getFullYear()} Daniel Villamizar. {t.rights}
                </p>
            </div>
        </section>
    )
}
