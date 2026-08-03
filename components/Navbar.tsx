import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import Link from "next/link";

type Props = {}

const links = [
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#education', label: 'Education' },
]

const Navbar = (props: Props) => {
    return (
        <nav className="sticky top-0 left-0  border-b border-(--border) backdrop-blur-sm" >
            <div className="mx-auto! flex max-w-(--maxw) items-center justify-between px-7! py-4!">
                <div className="">
                    <Link href={"/"} className="flex items-baseline gap-1.5 font-(family-name:--font-display)! text-[19px]">
                        Devanand M <span className="text-(--accent-strong) font-mono text-sm  ">/dev</span>
                    </Link>
                </div>
                <div className="hidden gap-8 text-sm text-(--text-muted) md:flex">
                    {links.map((l) => (
                        <Link key={l.href} href={l.href} className="transition-colors hover:text-(--text)!">
                            {l.label}
                        </Link>
                    ))}
                </div>
                <div className="flex gap-1.5">
                    <Link href={"/"} className="grid place-content-center text-xs font-mono border-(--border-strong) px-4! py-2.5!  rounded-full  border">
                        Get in Touch
                    </Link>
                    <ThemeToggleButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar