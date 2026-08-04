"use client"
import { Motiondiv } from '@/utils/motion'
import { useEffect, useState } from 'react'

const chips = ['FastAPI', 'Next.js', 'MongoDB', 'Redis', 'Celery', 'AWS', 'RAG / GenAI']

export function StatusCard() {
    const [pct, setPct] = useState(0)

    useEffect(() => {
        const start = setTimeout(() => {
            const iv = setInterval(() => {
                setPct((n) => {
                    if (n >= 100) { clearInterval(iv); return 100 }
                    return n + 4
                })
            }, 24)
        }, 400)
        return () => clearTimeout(start)
    }, [])

    return (
        <Motiondiv initial={{
            opacity: 0,
            y: 120,
            scale: 0.95,
            filter: "blur(12px)",
        }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
            }}
            viewport={{
                once: true,
                amount: 0.4,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            style={{
                willChange: "transform"
            }}
            className=" max-w-100 rounded-(--radius) border border-(--border) bg-linear-to-b from-(--surface) to-(--bg-elevated) p-5.5 font-mono text-[13px] shadow-(--shadow-card-sm)">
            <div className="mb-3.5 flex items-center justify-between border-b border-(--border) pb-3.5">
                <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.08em] text-(--text-dim)">
                    <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-(--accent-strong) shadow-[0_0_10px_var(--accent-strong)" />
                    Recent role
                </div>
                <span className="text-[10.5px] uppercase tracking-[0.08em] text-(--text-dim)">Feb 2025 — Jan 2026</span>
            </div>

            <h4 className="my-0.5 font-(family-name:--font-display) text-lg font-semibold text-(--text)">
                Tech Lead, Python Full Stack
            </h4>
            <div className="text-[12.5px] text-(--text-muted)">i2Global Virtual Learning · Chennai / Bangalore</div>

            <div className="my-4 flex items-center gap-2.5">
                <span className="w-25 text-[10.5px] uppercase tracking-[0.08em] text-(--text-dim)">Jr Dev → Lead</span>
                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-(--surface-2)">
                    <div
                        className="h-full rounded-full bg-linear-to-r from-(--accent) to-(--gold) transition-[width] duration-1400 ease-out"
                        style={{ width: `${pct}%` }}
                    />
                </div>
                <span className="text-[10.5px] uppercase tracking-[0.08em] text-(--text-dim)">{pct}%</span>
            </div>

            <div className="mt-3.5 flex flex-wrap gap-1.5">
                {chips.map((c) => (
                    <span key={c} className="rounded-md border border-(--border) bg-(--surface-2) px-2.5 py-1 text-[11px] text-(--text-muted)">
                        {c}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex justify-between border-t border-(--border) pt-3.5 text-[11.5px] text-(--text-dim)">
                <span>team scaled 2 → 6 devs</span>
                <span>3+ projects</span>
            </div>
        </Motiondiv>
    )
}