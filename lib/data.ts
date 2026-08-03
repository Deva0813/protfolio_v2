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
            name: "GPA, B.E. CSE",
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

export const projectConstant: {
    title: string,
    desc: string,
    tech_stack: string[],
    sub: string
}[] = [
        {
            title: "ProEdge",
            desc: "AI-powered e-learning platform — students purchase courses and attend live sessions. OpenAI auto-generates learning content and assessments from instructor input, with Razorpay payments and Celery/Redis for async processing.",
            tech_stack: [
                "Next.js",
                "FastAPI",
                "MongoDB",
                "OpenAI",
                "Razorpay",
                "AWS",
            ],
            sub: "e-learning"
        }, {
            title: "CRM Hub",
            desc: "Centralized lead management capturing leads from Meta Ads and web forms. Round-robin allocation, activity logs, and automated ETL pipelines syncing conversion data back to marketing for attribution.",
            tech_stack: ["Next.js",
                "FastAPI",
                "MongoDB",
                "Redis",
                "GenAI", "ETL"],
            sub: "crm"
        }, {
            title: "CMS Hub",
            desc: "Web-based helpdesk and ticket management system streamlining support workflows, with automated SLA/TAT alerts, email notifications, and schedulers.",
            tech_stack: [
                "Next.js",
                "Flask",
                "MySQL",
                "Google AppScript",
            ],
            sub: "helpdesk"
        }, {
            title: "Pigeon",
            desc: "This Saas application offers essential gaming functionalities, facilitates user communication, and resolves friend management challenges within the Unity engine.",
            tech_stack: [
                "Next.js", "Express.js", "MongoDB", "AWS"
            ],
            sub: "admin panel"
        },
        {
            title: "Real-time Sign Language Translator",
            desc: "A virtual-camera plug-in that bridges communication between hearing and specially-abled individuals via object detection — works in any video conferencing app.",
            tech_stack: [
                "Flask",
                "Deep Learning",
                "Computer Vision",
                "ML"
            ],
            sub: "accessibility"
        }
    ]

export const skillsConstants: {
    title: string,
    skills: string[]
}[] = [
        {
            title: "Languages & Markup",
            skills: ["Python", "TypeScript", "JavaScript", "Java", "HTML5"]
        },
        {
            title: "Frontend & Libraries",
            skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion", "React Query", "Zustand", "Recharts"]
        },
        {
            title: "Backend & APIs",
            skills: ["FastAPI", "Flask", "Express.js", "Celery", "Oauth"]
        },
        {
            title: "Databases & Caching",
            skills: ["MySQL", "MongoDB", "Redis", "RDS"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS", "Docker", "CI/CD", "Git", "GitHub", "Jira", "EC2", "SES", "S3", "Amplify"]
        },
        {
            title: "Data & Distributed Processing",
            skills: ["PySpark", "ETL pipelines"]
        },
        {
            title: "AI & LLM Engineering",
            skills: ["OpenAI", "Claude Code", "RAG", "AI Agent Workflows", "LLM", "LangChain"]
        },
        {
            title: "Automation & Analytics",
            skills: ["n8n", "Windsor.ai", "Google Analytics", "GTM", "Meta CAPI"]
        }
    ]

export const educationConstants: {
    degree: string,
    institution: string,
    start_date: string,
    end_date: string,
    gpa: string,
}[] = [

        {
            degree: "B.E. Computer Science & Engineering",
            institution: "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
            start_date: "2019",
            end_date: "2023",
            gpa: "9.09 GPA"
        },
        {
            degree: "HSC",
            institution: "Ramakrishna Mission Matriculation HSS",
            start_date: "2018",
            end_date: "2019",
            gpa: "72%"
        }, {
            degree: "SSLC",
            institution: "Ramakrishna Mission Matriculation HSS",
            start_date: "2016",
            end_date: "2017",
            gpa: "84.4%"
        }

    ]

export const certificationConstants: {
    title: string,
    organization: string,
    issue_date: string,
}[] = [
        {
            title: "AI Engineer Core Track - LLM Engineering, RAG, QLoRA, Agents",
            organization: "Udemy",
            issue_date: "2026"
        },
        {
            title: "Introduction to agent skills",
            organization: "Anthropic",
            issue_date: "2026"
        }, {
            title: "Oracle Certified Java Associate",
            organization: "Oracle",
            issue_date: "2023"
        }, {
            title: "Nalaiyathiran",
            organization: "IBM & ICT Academy",
            issue_date: "2023"
        }, {
            title: "The Complete 2022 Web Development Bootcamp",
            organization: "Udemy",
            issue_date: "2022"
        }, {
            title: "100 Days of Code: Python Pro Bootcamp",
            organization: "Udemy",
            issue_date: "2022"
        }]