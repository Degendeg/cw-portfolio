import { useEffect, useState } from "react";
import {
    EnvelopeIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/outline";
import cvFile from "../assets/cv.pdf";

export default function Footer() {
    const [highlight, setHighlight] = useState(false);

    useEffect(() => {
        const trigger = () => {
            if (window.location.hash === "#contact") {
                setHighlight(true);
                window.setTimeout(() => setHighlight(false), 5000);
            }
        };

        trigger();

        window.addEventListener("hashchange", trigger);
        return () => window.removeEventListener("hashchange", trigger);
    }, []);

    return (
        <footer className="border-t border-zinc-800 bg-zinc-950">
            <div className="mx-auto max-w-6xl px-6 py-10">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <p className="text-sm text-zinc-400">
                        © {new Date().getFullYear()} Christoffer Weltzin
                    </p>

                    <div className="flex items-center gap-6">

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/christoffer-weltzin-08004a203"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-zinc-300 hover:text-white transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-5 w-5"
                                fill="currentColor"
                            >
                                <path d="M19 0h-14C2.2 0 0 2.2 0 5v14c0 2.8 2.2 5 5 5h14c2.8 
                0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zM7.1 20H3.6V9h3.5v11zM5.3 
                7.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 
                2-.9 2-2 2zM20.4 20h-3.5v-5.4c0-1.3 
                0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9.5V9h3.4v1.5h.1c.5-.9 
                1.6-1.8 3.2-1.8 3.5 0 4.1 2.3 4.1 5.3V20z" />
                            </svg>
                            <span className="text-sm">LinkedIn</span>
                        </a>

                        {/* CV */}
                        <a
                            href={cvFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-zinc-300 hover:text-white transition"
                        >
                            <DocumentTextIcon className="h-5 w-5" />
                            <span className="text-sm">CV</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:christoffer.weltzin@gmail.com"
                            id="contact"
                            className={`group flex items-center gap-2 text-zinc-300 hover:text-white transition ${highlight ? "animate-bounce text-white scale-120" : ""}`}
                        >
                            <EnvelopeIcon className="h-5 w-5" />
                            <span className="text-sm">Email</span>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    );
}
