import Heading from '../Common/Heading'
import CertificateCard from './CertificateCard'
import EducationCard from './EducationCard'

type Props = {}

const EducationCertSection = (props: Props) => {
    return (
        <div id="education" className='bg-(--bg-elevated) border-y border-(--border)'>
            <div className="section_container grid px-6 py-16 gap-5">
                <Heading
                    title="Education & Certifications"
                    sub_title="Foundations, formalized."
                    desc=""
                />
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mt-8">
                    <EducationCard />
                    <CertificateCard />
                </div>
            </div>
        </div>
    )
}

export default EducationCertSection