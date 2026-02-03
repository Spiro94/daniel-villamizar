import { Mail } from "lucide-react";
import Button from "./Button";

export default function ContactSection() {
    return (
        <section id='contact' className="flex flex-col items-center py-20 gap-6 max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold max-w-2xl mx-auto">Let's build something amazing together.</h1>
            <p className="text-stone-500">Feel free to reach out to me via email or social media.</p>
            <div className="inline-flex gap-2"><Mail></Mail>danieljosevillamizar@gmail.com</div>
            <Button type="primary">Download CV</Button>
            <p className="text-stone-400 mt-8">&copy;{new Date().getFullYear()} Daniel Villamizar. All rights reserved.</p>
        </section>
    )
}
