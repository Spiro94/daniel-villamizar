import Button from "./Button";

// ...existing code...
export default function NavBar() {
    const handleScrollTo = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-8 items-center py-3 px-8 font-display font-medium bg-white rounded-full shadow-2xl text-chocolate/90">
            <a href='#home' className='hover:text-tangerine transition-all duration-200 hover:scale-105'>Home</a>
            <a href='#about' className='hover:text-tangerine transition-all duration-200 hover:scale-105'>About</a>
            <a href='#projects' className='hover:text-tangerine transition-all duration-200 hover:scale-105'>Projects</a>
            <a href='#skills' className='hover:text-tangerine transition-all duration-200 hover:scale-105'>Skills</a>
            <a href='#experience' className='hover:text-tangerine transition-all duration-200 hover:scale-105'>Experience</a>
            <Button onClick={() => handleScrollTo('contact')}>Contact</Button>
        </nav>
    )
}