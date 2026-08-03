import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link';
import { buttonVariants } from '../lib/constants';

type Props = {
    varient?: "fill" | "outline",
    href: string,
    text: string,
    arrow?: boolean
}

export const LinkButton = ({ varient = "outline", ...props }: Props) => {
    return (
        <Link href={props.href} target="_blank" className={clsx(buttonVariants[varient], ' rounded-full text-sm font-semibold flex gap-3 items-center', props.arrow ? "py-2! pr-2! pl-6!" : "px-6! py-3.5!")}>
            {props.text}
            {props.arrow && <span className="block bg-(--accent) text-(--bg) rounded-full p-1!"><ArrowUpRight /></span>}
        </Link>
    )
}
