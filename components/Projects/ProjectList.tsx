"use client"

import { projectConstant } from '@/lib/data'
import { Motiondiv } from '@/utils/motion'
import { useInView } from 'motion/react'
import { useRef } from 'react'
import ProjectCard from './ProjectCard'

type Props = {}

const ProjectList = (props: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const inView = useInView(ref,{once:true})
    return (
        <div ref={ref} className="grid sm:grid-cols-2 gap-5 mt-8">
            {
                projectConstant.map((item, index) => {
                    return <Motiondiv initial={{ y: 30, opacity: 0 }} animate={{
                        y: inView ? 0 : 30,
                        opacity: inView ? 1 : 0
                    }}
                        transition={{
                            duration: 0.5,
                            delay: (index * 0.2),
                            ease: "easeOut",
                        }}
                        
                        key={index}>
                        <ProjectCard {...item} index={index} key={index} />
                    </Motiondiv>
                })
            }
        </div>
    )
}

export default ProjectList