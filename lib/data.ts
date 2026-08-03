export const statsConstants: {
    name: string,
    value: string
}[] = [
        {
            name: "Years of Experience",
            value: "2.5+",
        },
        {
            name: "Platforms Shipped",
            value: "5+",
        },
        {
            name: "CGPA, B.E. CSE",
            value: "9.09",
        },
        {
            name: "Certifications",
            value: "10+",
        },
    ]

export const experienceConstants: {
    company: string,
    website: string,
    work_exp: {
        role: string,
        start_date: string,
        end_date: string,
        currently_working: boolean,
        description_points: string[],
        location: string,
        type: "full-time" | "part-time" | "internship" | "freelance" | "contract"
    }[]
}[] = [

        {
            company: "i2Global Virtual Learning Pvt. Ltd.",
            website: "https://i2global.in",
            work_exp: [
                {
                    role: "Tech Lead (Python Full Stack)",
                    start_date: "2025-02-01",
                    end_date: "2026-01-10",
                    currently_working: false,
                    description_points: [
                        "Led a team of 2-6 engineers to build CRM Hub, replacing HubSpot/Privyr — lead management, Meta Conversions API, Google Ads tracking, automated via n8n.",
                        "Built GenAI/RAG pipelines for content generation, lead data analysis, ETL automation, and assessment evaluation.",
                        "Engineered scalable backends on FastAPI/Flask, MongoDB, Celery, and Redis for async task processing.",
                        "Shipped high-performance frontends with Next.js, Tailwind CSS, and Zustand.",
                        "Ran AWS infra (EC2, SES, Auto Scaling) for high availability; translated business needs into system architecture with product & leadership."
                    ],
                    location: "Chennai,Bangalore - India",
                    type: "full-time"
                },
                {
                    role: "Full Stack Engineer",
                    start_date: "2024-04-01",
                    end_date: "2025-01-31",
                    currently_working: false,
                    description_points: ["Architected a CMS and ticket management platform with Next.js and Flask to streamline internal support.",
                        "Built REST APIs and automation improving ticket tracking and SLA compliance.",
                        "Deployed and maintained production apps on AWS.",
                        "Built SEO-optimized marketing pages integrated with Google Analytics, HubSpot, and Meta tracking."
                    ],
                    location: "Chennai - India",
                    type: "full-time"
                },
                {
                    role: "Jr. Web Developer",
                    start_date: "2024-02-19",
                    end_date: "2024-03-31",
                    currently_working: false,
                    description_points: [
                        "Built 10+ SEO-optimized landing pages in Next.js, lifting marketing lead conversion.",
                        "Partnered with design & marketing on responsive UI, improving load speed and cross-device consistency.",
                        "Integrated GTM, Meta Pixel, and HubSpot CRM."
                    ],
                    location: "Chennai - India",
                    type: "full-time"
                }
            ]
        },
        {
            company: "Pixamentory",
            website: "https://pixamentory.io/",
            work_exp: [{
                role: "Full Stack Developer Intern (MERN)",
                start_date: "2023-06-01",
                end_date: "2024-02-18",
                currently_working: false,
                description_points: ["Built end-to-end SaaS platforms in Next.js and Express.js — REST APIs, admin dashboards, auth systems.",
                    "Built a SaaS platform managing user data, billing, and customer communications.",
                    "Wrote technical documentation to communicate system performance to management."
                ],
                location: "Remote - India",
                type: "internship"
            }]

        },
        {
            company: "Virtusa Consulting Service Pvt. Ltd",
            website: "https://www.virtusa.com/",
            work_exp: [
                {
                    role: "Digital Engineer Intern (Java Full Stack)",
                    start_date: "2023-01-30",
                    end_date: "2023-04-28",
                    currently_working: false,
                    description_points: [
                        "Built a full-stack IAS portal in React.js and Spring Boot for user, institute, and admin reporting.",
                        "Prepared reports and documentation for senior management.",
                        "Designed and coordinated engineering tests and experiments."
                    ],
                    location: "Chennai - India",
                    type: "internship"
                }
            ]
        }

    ]

export const empTypeConstant = {
    "full-time": "Full-Time", "part-time": "Part-Time", "internship": "Intern", "freelance": "Freelance", "contract": "Contract"
}