import { projectConstant } from "@/lib/data"
import Heading from "../Common/Heading"
import ProjectCard from "./ProjectCard"

type Props = {}

const ProjectSection = (props: Props) => {
    return (
        <div className='bg-(--bg-elevated)' id="projects" >
            <div className="section_container grid  sm:px-6 px-4 pt-23 py-16 gap-5">
                <Heading
                    title="Projects"
                    sub_title="Platforms built from architecture to deploy."
                    desc="A mix of work and personal builds."
                />

                <div className="grid grid-cols-2 gap-5">
                    {
                        projectConstant.map((item, index) => {
                            return <ProjectCard {...item} index={index} key={index} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectSection