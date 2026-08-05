import { contactConstants } from "@/lib/data"
import Link from "next/link"

type Props = {}

const Footer = (props: Props) => {
    const year = new Date().getFullYear()
    const list = [
        {
            name: "Old Portfolio",
            link: contactConstants.old_portfolio.link
        },
        {
            name: "Email",
            link: contactConstants.email.link
        }, {
            name: "Github",
            link: contactConstants.github.link
        }
    ]
    return (
        <div className='border-t border-(--border)'>
            <div className="section_container flex max-sm:flex-col gap-4 justify-between text-sm py-8 px-6 text-(--text-dim)">
                <div className="">
                    © {year} Devanand M. Built with care, deployed with confidence.
                </div>
                <div className="flex gap-4 ">
                    {
                        list.map((item, idx) => <Link key={idx} href={item.link} target="_blank" className="hover:text-(--accent)!">{item.name}</Link>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer