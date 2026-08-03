import { educationConstants } from '@/lib/data'

type Props = {}

const EducationCard = (props: Props) => {
    return (
        <div className="border border-(--border) p-6 rounded-xl bg-(--surface)">
            <h3 className="text-sm font-mono mb-2 text-(--gold) uppercase font-medium">Education</h3>
            <ul className="grid gap-4 divide-y divide-(--border) mt-5">
                {educationConstants.map((item, idx) => {
                    return <li className="grid grid-cols-[1fr_auto] gap-x-2 gap-y-1 pb-4 last:pb-0" key={idx}>
                        <p className='text-sm font-medium'>{item.institution}</p>
                        <p className='text-sm text-(--accent-strong) font-mono'>{item.gpa}</p>
                        <p className='text-[0.8rem] text-(--text-dim)'>{item.degree} • {item.start_date}-{item.end_date}</p>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default EducationCard