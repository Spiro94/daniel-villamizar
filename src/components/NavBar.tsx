import { Menu, X } from "lucide-react";
import { useState } from "react";
import Button from "./Button";

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleScrollTo = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 gap-4 lg:gap-8 items-center py-3 px-4 lg:px-8 font-display font-medium bg-white rounded-full shadow-2xl text-chocolate/90">
                <a href='#home' className='hover:text-tangerine transition-all duration-200 hover:scale-105 text-sm lg:text-base'>Home</a>
                <a href='#about' className='hover:text-tangerine transition-all duration-200 hover:scale-105 text-sm lg:text-base'>About</a>
                <a href='#projects' className='hover:text-tangerine transition-all duration-200 hover:scale-105 text-sm lg:text-base'>Projects</a>
                <a href='#skills' className='hover:text-tangerine transition-all duration-200 hover:scale-105 text-sm lg:text-base'>Skills</a>
                <a href='#experience' className='hover:text-tangerine transition-all duration-200 hover:scale-105 text-sm lg:text-base'>Experience</a>
                <Button onClick={() => handleScrollTo('contact')}>Contact</Button>
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
                        <a href='#home' onClick={() => setIsMenuOpen(false)} className='hover:text-tangerine transition-all duration-200'>Home</a>
                        <a href='#about' onClick={() => setIsMenuOpen(false)} className='hover:text-tangerine transition-all duration-200'>About</a>
                        <a href='#projects' onClick={() => setIsMenuOpen(false)} className='hover:text-tangerine transition-all duration-200'>Projects</a>
                        <a href='#skills' onClick={() => setIsMenuOpen(false)} className='hover:text-tangerine transition-all duration-200'>Skills</a>
                        <a href='#experience' onClick={() => setIsMenuOpen(false)} className='hover:text-tangerine transition-all duration-200'>Experience</a>
                        <Button onClick={() => handleScrollTo('contact')}>Contact</Button>
                    </div>
                </div>
            )}
        </>
    )
}