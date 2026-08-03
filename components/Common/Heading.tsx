
type Props = {
    title: string,
    sub_title: string,
    desc: string
}

const Heading = (props: Props) => {
    return (
        <div className="grid gap-5">
            <span className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-(--gold) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--gold) before:shadow-[0_0_8px_var(--gold)] before:content-[''] before:animate-pulse">
                {props.title}
            </span>
            <p className="font-(family-name:--font-display) text-4xl font-medium leading-12 max-w-xl">{props.sub_title}</p>
            <p className="text-(--text-dim) text-sm">{props.desc}</p>
        </div>
    )
}

export default Heading