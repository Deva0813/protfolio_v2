"use client"
import { statsConstants } from '@/lib/data';
import { totalContributions } from '@/lib/github';
import { formatCount } from '@/lib/helper';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type Props = {}


const Stats = (props: Props) => {

    const { data } = useQuery({
        queryKey: ['user_data'], queryFn: totalContributions, staleTime: 60 * 1000,
        gcTime: 60 * 1000,
    })

    const { data: user } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const res = await axios.get("https://api.github.com/users/deva0813")
            return res.data
        }
    })

    const { data: user2 } = useQuery({
        queryKey: ["user2"],
        queryFn: async () => {
            const res = await fetch("https://api.github.com/users/deva0813")
            return res.json()
        }
    })

    console.log(user, "axios");
    console.log(user2, "fetch");

    return (
        <div className="border-y border-(--border)">

            <div className="section_container  sm:px-7! px-4! py-10! grid grid-cols-2 sm:grid-cols-4 gap-8">
                {statsConstants.map((item, idx) => {
                    return (
                        <div className="text-center grid gap-3" key={idx}>
                            <p className="text-4xl text-(--accent-strong) font-semibold font-(family-name:--font-display)">
                                {item.name == "Github Contributions" ? formatCount(data ? data : 3016) : item.value}
                            </p>
                            <p className="text-xs text-(--text-dim)">{item.name}</p>
                        </div>
                    );
                })}
            </div>

        </div>
    )
}

export default Stats