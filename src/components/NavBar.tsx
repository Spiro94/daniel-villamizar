import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";
import { useLang } from "../i18n";

function LangToggle() {
    const { lang, setLang } = useLang();
    return (
        <div className="inline-flex rounded-full bg-lavender-soft p-1 text-xs font-semibold" role="group" aria-label="Language">
            {(['en', 'es'] as const).map((l) => (
                <button
                    key={l}
                    onClick={() => setLang(l)}
                    aria-pressed={lang === l}
                    className={`px-2.5 py-1 rounded-full uppercase cursor-pointer transition-colors ${lang === l ? 'bg-white text-chocolate shadow' : 'text-lavender-dark'}`}
                >
                    {l}
                </button>
            ))}
        </div>
    );
}

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLang();

    const links = [
        ['apps', t.navApps],
        ['projects', t.navWork],
        ['services', t.navServices],
        ['process', t.navProcess],
        ['experience', t.navExperience],
    ];

    const handleScrollTo = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-4 lg:gap-8 items-center py-3 px-4 lg:px-8 font-display font-medium bg-white rounded-full shadow-2xl text-chocolate/90">
                {links.map(([id, label]) => (
                    <a key={id} href={`#${id}`} className='hover:text-tangerine transition-all duration-200 hover:scale-105 text-sm lg:text-base'>{label}</a>
                ))}
                <LangToggle />
                <Button onClick={() => handleScrollTo('contact')}>{t.getQuote}</Button>
            </nav>

            {/* Mobile Navigation */}
            <nav className="md:hidden fixed top-4 right-4 z-50">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-3 bg-white rounded-full shadow-2xl text-chocolate"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 z-40 bg-white/95 backdrop-blur-sm">
                    <div className="flex flex-col items-center justify-center h-full gap-8 font-display font-medium text-xl">
                        {links.map(([id, label]) => (
                            <a key={id} href={`#${id}`} onClick={() => setIsMenuOpen(false)} className='hover:text-tangerine transition-all duration-200'>{label}</a>
                        ))}
                        <LangToggle />
                        <Button onClick={() => handleScrollTo('contact')}>{t.getQuote}</Button>
                    </div>
                </div>
            )}
        </>
    )
}
