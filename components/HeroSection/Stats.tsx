"use client"
import { statsConstants } from '@/lib/data';
import { userData } from '@/lib/github';
import { formatCount } from '@/lib/helper';
import { useEffect, useRef, useState } from 'react';

type Props = {}

const Stats = (props: Props) => {
    const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN
    
    type StatsData = {
        totalContributions: number;
        commits: number;
        pullRequests: number;
        issues: number;
        repositoriesContributedTo: number;
    };

    const [data, setData] = useState<StatsData>({
        totalContributions: 0,
        commits: 0,
        pullRequests: 0,
        issues: 0,
        repositoriesContributedTo: 0,
    });

    const mounted = useRef(true);

    useEffect(() => {
        mounted.current = true;

        (async () => {
            try {
                const res = await userData();
                if (mounted.current && res) setData(res);
            } catch (e) {
                // swallow - keep defaults
            }
        })();

        return () => {
            mounted.current = false;
        };
    }, []);

    return (
        <div className="border-y border-(--border)">
            {token?.slice(0,10)}
            <div className="section_container  sm:px-7! px-4! py-10! grid grid-cols-2 sm:grid-cols-4 gap-8">
                {statsConstants.map((item, idx) => {
                    return (
                        <div className="text-center grid gap-3" key={idx}>
                            <p className="text-4xl text-(--accent-strong) font-semibold font-(family-name:--font-display)">
                                {item.name == "Github Contributions" ? formatCount(data ? data.totalContributions : 0) : item.value}
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