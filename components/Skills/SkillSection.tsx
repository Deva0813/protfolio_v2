import { skillsConstants } from '@/lib/data'
import { MotionSpan } from '@/utils/motion'
import Heading from '../Common/Heading'

type Props = {}

const SkillSection = (props: Props) => {
    return (
        <div id="skills">
            <div className="section_container grid  sm:px-6 px-4 py-16 gap-5">
                <Heading
                    title="Skills"
                    sub_title="The stack, end to end."
                    desc="From database to deployment, every layer I've touched."
                />
                <div className="grid grid-cols-3 gap-10 mt-8">
                    {
                        skillsConstants.map((skill, index) => {
                            return <div className="" key={index}>
                                <h3 className="text-xs font-medium font-mono uppercase text-(--gold)">{skill.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {skill.skills.map((s, i) => {
                                        return <MotionSpan initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}

                                            transition={{
                                                duration: 0.5,
                                                delay: (i * 0.1),
                                                ease: "easeOut",
                                            }}
                                            viewport={{ once: true }}

                                            style={{ willChange: "transform" }} key={i} className="rounded-sm px-3 py-1 border border-(--border) bg-(--accent-dim) text-[.8rem] text-(--text-muted)">{s}</MotionSpan>
                                    })}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SkillSection