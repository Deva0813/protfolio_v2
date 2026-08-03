import { empTypeConstant, experienceConstants } from "@/lib/data"
import { clsx } from "clsx"
import { Plus } from "lucide-react"
import Heading from "../Common/Heading"

type Props = {}

const ExperienceSection = (props: Props) => {

    const experience_list = experienceConstants
        .flatMap(({ company: company_name, website, work_exp }) => {
            let count = work_exp.length + 1
            return work_exp.map(job => {
                count--
                return {
                    ...job, company_name, website, version: count,
                    start_date_string: new Date(job.start_date).toLocaleString("default", { month: "short", year: "numeric" }),
                    end_date_string: job.currently_working ? "Present" : new Date(job.end_date).toLocaleString("default", { month: "short", year: "numeric" })
                }
            })
        }
        )
        .sort((a, b) => new Date(b.start_date).getTime() - new Date(a.start_date).getTime())

    return (
        <div className='' id="experience" >
            <div className="section_container grid  sm:px-6 px-4 pt-23 py-16 gap-5">
                <Heading
                    title="Experience"
                    sub_title="Shipped my way from junior dev to leading the team."
                    desc="Every role, every internship, one continuous climb."
                />
                <div className="grid grid-cols-[auto_1fr] mt-8 ml-2">
                    <div className="bg-linear-180 from-(--accent-strong) to-transparent w-0.5"></div>
                    <div className="grid gap-10 pl-6 -mt-2">
                        {
                            experience_list.flat().map((exp, index) => (
                                <div key={index} className="grid gap-3">
                                    <p className="font-mono text-(--text-dim) text-sm relative">
                                        <span className={clsx
                                            ("block size-4 border-2 rounded-full border-(--accent-strong) bg-(--bg) absolute -left-8.25 top-1/2 -translate-y-1/2", index == 0 && " ring-4 ring-(--accent-dim) bg-(--accent-strong)! ")
                                        }></span>
                                        <span className=" lowercase bg-(--gold-dim) text-(--gold) text-xs rounded-md px-2.5 py-1 ">{
                                            index == 0 ? "main" : exp.type == "full-time" ? `v${exp.version}.0` : empTypeConstant[exp.type]
                                        }</span> {exp.start_date_string} - {exp.end_date_string} </p>

                                    <h4 className="font-semibold text-xl font-(family-name:--font-display) text-(--text)">
                                        {exp.role}
                                    </h4>
                                    <p className="text-(--accent-strong) -mt-2 text-sm font-medium">{
                                        exp.company_name
                                    } &nbsp;•&nbsp; {
                                            exp.location
                                        }</p>

                                    <ul className="list-disc space-y-2! text-(--text-muted) text-sm list-inside ">
                                        {
                                            exp.description_points.map((point, index) => (
                                                <li key={index} className="mb-1 list-none grid grid-cols-[auto_1fr] max-w-4xl"> <Plus size={12} className="mt-1 mr-2 text-(--accent-strong)" />  {point}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection