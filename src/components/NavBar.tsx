import Button from './Button'

export default function NavBar() {
    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-8 items-center py-2 px-8 font-display bg-white rounded-full shadow-2xl text-chocolate">
            <a className='hover:text-tangerine transition-colors'>Home</a>
            <a className='hover:text-tangerine transition-colors'>About</a>
            <a className='hover:text-tangerine transition-colors'>Projects</a>
            <a className='hover:text-tangerine transition-colors'>Skills</a>
            <a className='hover:text-tangerine transition-colors'>Experience</a>
            <Button onClick={() => console.log('tapped')}>Contact</Button>
        </nav>
    )
}
