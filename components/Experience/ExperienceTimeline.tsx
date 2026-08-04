import { empTypeConstant } from '@/lib/data';
import { Motiondiv } from '@/utils/motion';
import clsx from 'clsx';
import { Plus } from 'lucide-react';

type Props = {
    list: {
        company_name: string;
        website: string;
        version: number;
        start_date_string: string;
        end_date_string: string;
        role: string;
        start_date: string;
        end_date: string;
        currently_working: boolean;
        description_points: string[];
        location: string;
        type: "full-time" | "part-time" | "internship" | "freelance" | "contract";
    }[]
}

const ExperienceTimeline = (props: Props) => {


    return (
        <div className="grid grid-cols-[auto_1fr] mt-8 ml-2"  >
            <div className="bg-linear-180 from-(--accent-strong) to-transparent w-0.5"></div>
            <div className="grid gap-10 pl-6 -mt-2">
                {
                    props.list.flat().map((exp, index) => (
                        <Motiondiv initial={{
                            opacity: 0,
                            y: 30,
                        }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: 0.15,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }} key={index} className="grid gap-3">
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
                        </Motiondiv>
                    ))
                }
            </div>
        </div>
    )
}

export default ExperienceTimeline