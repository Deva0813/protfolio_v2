"use client"
import { MotionP, MotionSpan } from "@/utils/motion";
import clsx from "clsx";
import { ArrowUp } from "lucide-react";
import Link from 'next/link';
import { useState } from "react";
import { buttonVariants } from '../../lib/constants';

type Props = {
    varient?: "fill" | "outline",
    href: string,
    text: string,
    arrow?: boolean
}

export const LinkButton = ({ varient = 'outline', ...props }: Props) => {
    const [hovered, setHovered] = useState(false)
    return (
        <Link
            href={props.href}
            target="_blank"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={clsx(
                buttonVariants[varient],
                'group flex items-center gap-3 text-nowrap rounded-full text-sm font-semibold',
                props.arrow ? 'py-2! pl-6! pr-2!' : 'px-6! py-3.5!'
            )}
        >
            {props.text}
            {props.arrow && (
                <span className="block h-8 w-8 overflow-hidden rounded-full bg-(--accent) p-1! text-(--bg)">
                    <MotionSpan
                        className="flex flex-col gap-7 rotate-45 -ml-5.25"
                        initial={{ y: 0 }}
                        animate={{ y: hovered ? '-67%' : 0 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                    >
                        <ArrowUp className="shrink-0"  />
                        <ArrowUp className="shrink-0"  />
                    </MotionSpan>
                </span>
            )}
        </Link>
    )
}
export const NavLinks = (props: {
    href: string,
    text: string
}) => {
    return (
        <Link href={props.href} className=" h-5 overflow-hidden">
            <MotionP initial={{
                y: 0
            }} whileHover={{
                y: -28
            }} transition={{
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            }} className="flex flex-col gap-2" >
                <span>{props.text}</span>
                <span>{props.text}</span>
            </MotionP>

        </Link>
    )
}
