import Link from 'next/link'

export default function Footer(){
    return(
        <footer className="mt-20 border-t border-white/10 bg-primary">
            <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="font-serif text-lg text-white">Luis Rosario</p>
                    <p className="text-sm">Always learning, well sometimes... 🧍</p>
                </div>

                <nav className="flex flex-wrap gap-4 text-sm">
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/blog">
                        Blog
                    </Link>
                    <Link href="/about">
                        About
                    </Link>
                    <a
                        href="https://github.com/Luis-Rosario-Alers"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </nav>
            </div>

            <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Luis Rosario. All rights reserved.
            </div>
        </footer>
    );
}