import Heading from "../Common/Heading"
import ProjectList from "./ProjectList"

type Props = {}

const ProjectSection = (props: Props) => {
    return (
        <div className='bg-(--bg-elevated) border-y border-(--border)' id="projects" >
            <div className="section_container grid px-6 py-16 gap-5">
                <Heading
                    title="Projects"
                    sub_title="Platforms built from architecture to deploy."
                    desc="A mix of work and personal builds."
                />
                <ProjectList />
            </div>
        </div>
    )
}

export default ProjectSection