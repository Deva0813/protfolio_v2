import { statsConstants } from "@/lib/data"
import { LinkButton } from "../Buttons"
import { StatusCard } from "./StatusCard"

type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className='' >
            <div className="section_container grid sm:grid-cols-2 sm:px-6 px-4 pt-23 py-16">
                <div className="">
                    <span className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-(--gold) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--gold) before:shadow-[0_0_8px_var(--gold)] before:content-[''] before:animate-pulse">
                        Chennai, India · Open to opportunities
                    </span>
                    <h1 className="my-5 font-(family-name:--font-display) text-[clamp(34px,4.6vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em]">
                        Full stack engineer,
                        <br />
                        <em className="font-normal italic text-(--accent-strong)">shipping AI-native</em> products end to end.
                    </h1>

                    <p className="mb-7 max-w-120 text-[16.5px] text-(--text-muted)">
                        2.5+ years across Python (FastAPI, Flask) and MERN, building scalable platforms — CRM, LMS, CMS — and
                        layering in GenAI: RAG pipelines, OpenAI &amp; Gemini agents, from architecture to deploy.
                    </p>
                    <div className="flex gap-4 items-center">
                        <LinkButton text="Get in Touch" href="mailto:devanand151101@gmail.com" varient="fill" />
                        <LinkButton text="View Github" href="https://github.com/Deva0813" arrow />
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <StatusCard />
                </div>
            </div>
            <div className="border-y border-(--border)">
                <div className="section_container  sm:px-7! px-4! py-10! grid grid-cols-4 ">
                    {
                        statsConstants.map((item, idx) => {
                            return <div className="text-center grid gap-3" key={idx}>
                                <p className="text-4xl text-(--accent-strong) font-semibold font-(family-name:--font-display)" >{item.value}</p>
                                <p className="text-xs text-(--text-dim)">{item.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroSection