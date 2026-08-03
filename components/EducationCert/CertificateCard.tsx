import { certificationConstants } from '@/lib/data'


type Props = {}

const CertificateCard = (props: Props) => {
    return (
        <div className="border border-(--border) p-6 rounded-xl bg-(--surface)">
            <h3 className="text-sm font-mono mb-2 text-(--gold) uppercase font-medium">Certifications  </h3>
            <ul className="grid gap-2 mt-5   list-inside pl-5">
                {certificationConstants.map((item, idx) => {
                    return <li className=" last:pb-0 relative" key={idx}>
                        <span className='text-(--accent-strong) text-xs absolute -left-5 top-1.25'>▶</span>
                        <span className='text-sm font-medium'>{item.title}</span>&nbsp; • &nbsp;
                        <span className='text-sm text-(--accent-strong) font-mono'>{item.organization}</span>&nbsp;
                        <span className='text-[0.8rem] text-(--text-dim)'>({item.issue_date})</span>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default CertificateCard