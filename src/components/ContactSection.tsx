import { Mail } from "lucide-react";
import Button from "./Button";
import { siGithub } from 'simple-icons';
import { FaLinkedin } from "react-icons/fa";
import CV from '../assets/Daniel Villamizar CV.pdf';

export default function ContactSection() {
    return (
        <section id='contact' className="flex flex-col items-center py-20 gap-8 max-w-6xl mx-auto text-center px-8">
            <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold max-w-2xl mx-auto text-chocolate tracking-tight leading-tight">
                    Let's build something amazing together.
                </h1>
                <p className="text-chocolate/60 text-lg font-medium max-w-xl mx-auto">
                    I'm always open to discussing new opportunities, collaborations, or just having a chat about mobile development and technology.
                </p>
            </div>

            <div className="flex flex-col gap-6 items-center">
                <a
                    href="mailto:danieljosevillamizar@gmail.com"
                    className="inline-flex gap-3 items-center text-lg font-medium text-chocolate/80 hover:text-primary transition-colors group"
                >
                    <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
                    <span className="underline decoration-primary/30 hover:decoration-primary">
                        danieljosevillamizar@gmail.com
                    </span>
                </a>

                <div className="flex gap-6 items-center">
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
                            className="w-8 h-8 fill-current group-hover:scale-110 transition-transform"
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
                        <FaLinkedin className="w-8 h-8 fill-current group-hover:scale-110 transition-transform" />
                        <span className="font-medium">LinkedIn</span>
                    </a>
                </div>
            </div>

            <a href={CV} download="Daniel_Villamizar_CV.pdf" className="mt-2">
                <Button type="primary">Download CV</Button>
            </a>

            <p className="text-chocolate/50 mt-8 font-medium">
                &copy;{new Date().getFullYear()} Daniel Villamizar. All rights reserved.
            </p>
        </section>
    )
}
