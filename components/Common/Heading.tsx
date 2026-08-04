"use client"

import { MotionSpan } from "@/utils/motion"
import { useInView } from "motion/react"
import { useRef } from "react"

type Props = {
    title: string,
    sub_title: string,
    desc: string
}

const Heading = (props: Props) => {
    const pRef = useRef<HTMLParagraphElement>(null)
    const inview = useInView(pRef, {
        once: true
    })
    return (
        <div className="grid gap-5">
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-(--gold) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--gold) before:shadow-[0_0_8px_var(--gold)] before:content-[''] before:animate-pulse">
                {props.title}
            </span>
            <p ref={pRef} className="font-(family-name:--font-display) text-4xl font-medium leading-12 max-w-xl">
                {props.sub_title.split(" ").map((word, i) => (
                    <MotionSpan
                        key={i}
                        className="inline-block mr-2"
                        initial={{
                            opacity: 0,
                            y: 10,
                            filter: "blur(12px)",
                        }}
                        animate={{
                            opacity: inview ? 1 : 0,
                            y: inview ? 0 : 10,
                            filter: inview ? "blur(0px)" : "blur(12px)",
                        }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                    >
                        {word}
                    </MotionSpan>
                ))}
            </p>
            {props.desc && <p className="text-(--text-dim) text-sm -mt-2">{props.desc}</p>}
        </div>
    )
}

export default Heading