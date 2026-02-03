import { Mail } from "lucide-react";
import Button from "./Button";

export default function ContactSection() {
    return (
        <section id='contact' className="flex flex-col items-center py-20 gap-6 max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold max-w-2xl mx-auto text-chocolate tracking-tight leading-tight">Let's build something amazing together.</h1>
            <p className="text-chocolate/60 text-lg font-medium">Feel free to reach out to me via email or social media.</p>
            <div className="inline-flex gap-3 items-center text-lg font-medium text-chocolate/80"><Mail className="text-primary"></Mail>danieljosevillamizar@gmail.com</div>
            <Button type="primary">Download CV</Button>
            <p className="text-chocolate/50 mt-8 font-medium">&copy;{new Date().getFullYear()} Daniel Villamizar. All rights reserved.</p>
        </section>
    )
}
