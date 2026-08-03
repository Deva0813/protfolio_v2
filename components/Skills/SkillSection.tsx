import { skillsConstants } from '@/lib/data'
import Heading from '../Common/Heading'

type Props = {}

const SkillSection = (props: Props) => {
    return (
        <div id="skills">
            <div className="section_container grid  sm:px-6 px-4 pt-23 py-16 gap-5">
                <Heading
                    title="Skills"
                    sub_title="The stack, end to end."
                    desc="From database to deployment, every layer I've touched."
                />
                <div className="grid grid-cols-3 gap-10 mt-8">
                    {
                        skillsConstants.map((skill, index) => {
                            return <div className="">
                                <h3 className="text-xs font-medium font-mono uppercase text-(--gold)">{skill.title}</h3>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    { skill.skills.map((s, i) => {
                                        return <span key={i} className="rounded-sm px-3 py-1 border border-(--border) bg-(--accent-dim) text-[.8rem] text-(--text-muted)">{s}</span>
                                    }) }
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