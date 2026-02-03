import { Mail } from "lucide-react";
import Button from "./Button";
import { siGithub } from 'simple-icons';
import { FaLinkedin } from "react-icons/fa";
import CV from '../assets/Daniel Villamizar CV.pdf';

export default function ContactSection() {
    return (
        <section id='contact' className="flex flex-col items-center py-12 sm:py-16 lg:py-20 gap-6 sm:gap-8 text-center px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background-light via-lavender-soft/40 to-primary/10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #8B7AB8 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 left-1/4 w-80 h-80 bg-lavender/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center gap-6 sm:gap-8">
                <div className="flex flex-col gap-4 sm:gap-6">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold max-w-2xl mx-auto text-chocolate tracking-tight leading-tight">
                        Let's build something amazing together.
                    </h1>
                    <p className="text-chocolate/60 text-base sm:text-lg font-medium max-w-xl mx-auto">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about mobile development and technology.
                    </p>
                </div>

                <div className="flex flex-col gap-6 items-center">
                    <a
                        href="mailto:danieljosevillamizar@gmail.com"
                        className="inline-flex gap-3 items-center text-base sm:text-lg font-medium text-chocolate/80 hover:text-primary transition-colors group break-all sm:break-normal"
                    >
                        <Mail className="text-primary group-hover:scale-110 transition-transform shrink-0" size={24} />
                        <span className="underline decoration-primary/30 hover:decoration-primary">
                            danieljosevillamizar@gmail.com
                        </span>
                    </a>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center">
                        <a
                            href="https://github.com/Spiro94"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-chocolate/70 hover:text-chocolate transition-colors"
                            aria-label="GitHub Profile"
                        >
                            <svg
                                role="img"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7 sm:w-8 sm:h-8 fill-current group-hover:scale-110 transition-transform"
                            >
                                <title>GitHub</title>
                                <path d={siGithub.path} />
                            </svg>
                            <span className="font-medium">GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/danielvillamizar94/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-chocolate/70 hover:text-[#0A66C2] transition-colors"
                            aria-label="LinkedIn Profile"
                        >
                            <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8 fill-current group-hover:scale-110 transition-transform" />
                            <span className="font-medium">LinkedIn</span>
                        </a>
                    </div>
                </div>

                <a href={CV} download="Daniel_Villamizar_CV.pdf" className="mt-2">
                    <Button type="primary">Download CV</Button>
                </a>

                <p className="text-chocolate/50 mt-6 sm:mt-8 font-medium text-sm sm:text-base">
                    &copy;{new Date().getFullYear()} Daniel Villamizar. All rights reserved.
                </p>
            </div>
        </section>
    )
}
