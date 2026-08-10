import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import Link from "next/link";
import { NavLinks } from "./Common/Buttons";

type Props = {};

const links = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
];

const Navbar = (props: Props) => {
  return (
    <nav className="sticky top-0 left-0 z-50! border-b border-(--border) bg-(--bg-dim) backdrop-blur-sm ">
      <div className="flex section_container items-center justify-between px-6 py-4!">
        <div className="">
          <Link
            href={""}
            className="flex items-baseline gap-1.5 font-(family-name:--font-display)! text-[19px]"
          >
            Deva
            <span className="text-(--accent-strong) font-mono text-sm  ">
              /dev
            </span>
          </Link>
        </div>
        <div className="hidden gap-8 text-sm text-(--text-muted) md:flex">
          {links.map((l) => (
            <NavLinks text={l.label} href={l.href} key={l.label} />
          ))}
        </div>
        <div className="flex gap-1.5 items-center">
          <Link
            href={"#contact"}
            className="grid place-content-center text-[.7813rem] font-mono border-(--border-strong) px-4! py-2! transition-all hover:border-(--accent) hover:bg-(--accent-dim) hover:text-(--accent-strong) text-(--text)  rounded-full  border"
          >
            Get in Touch
          </Link>
          <ThemeToggleButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
