import { statsConstants } from "@/lib/data";
import { MotionP, MotionSpan } from "@/utils/motion";
import { LinkButton } from "../Common/Buttons";
import { StatusCard } from "./StatusCard";

type Props = {};

const HeroSection = (props: Props) => {
  return (
    <div className="scroll-mt-17.75!">
      <div className="section_container grid sm:grid-cols-2 px-6 py-16 max-sm:gap-16 max-md:gap-4">
        <div className="">
          <span className="inline-flex items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-(--gold) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--gold) before:shadow-[0_0_8px_var(--gold)] before:content-[''] before:animate-pulse">
            Chennai, India · Open to opportunities
          </span>
          <h1
            aria-label="Full stack engineer, shipping AI-native products end to end."
            className="my-5 font-(family-name:--font-display) text-[clamp(34px,4.6vw,54px)] font-semibold leading-[1.08] tracking-[-0.04em]"
          >
            {"Full stack engineer,".split(" ").map((word, i) => (
              <MotionSpan
                key={i}
                className="inline-block mr-2"
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {word}
              </MotionSpan>
            ))}
            <br />
            <em className="font-normal italic text-(--accent-strong)">
              {"shipping AI-native".split(" ").map((word, i) => (
                <MotionSpan
                  key={i}
                  className="inline-block mr-2"
                  initial={{
                    opacity: 0,
                    y: 10,
                    filter: "blur(12px)",
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1 + 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                >
                  {word}
                </MotionSpan>
              ))}
            </em>{" "}
            {"products end to end.".split(" ").map((word, i) => (
              <MotionSpan
                key={i}
                className="inline-block mr-2"
                initial={{
                  opacity: 0,
                  y: 10,
                  filter: "blur(12px)",
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1 + 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                {word}
              </MotionSpan>
            ))}
          </h1>

          <MotionP
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 1,
              ease: "easeOut",
            }}
            aria-label=" 2.5+ years across Python (FastAPI, Flask) and MERN, building scalable platforms — CRM, LMS, CMS — and
                        layering in GenAI: RAG pipelines, OpenAI &amp; Gemini agents, from architecture to deploy."
            viewport={{ once: true }}
            className="mb-7 max-w-120 text-[16.5px] text-(--text-muted)"
          >
            2.5+ years across Python (FastAPI, Flask) and MERN, building
            scalable platforms — CRM, LMS, CMS — and layering in GenAI: RAG
            pipelines, OpenAI &amp; Gemini agents, from architecture to deploy.
          </MotionP>
          <div className="flex gap-4 items-center">
            <LinkButton
              text="Get in Touch"
              href="mailto:devanand151101@gmail.com"
              varient="fill"
            />
            <LinkButton
              text="View Github"
              href="https://github.com/Deva0813"
              arrow
            />
          </div>
        </div>
        <div className="flex items-center sm:justify-end">
          <StatusCard />
        </div>
      </div>
      <div className="border-y border-(--border)">
        <div className="section_container  sm:px-7! px-4! py-10! grid grid-cols-2 sm:grid-cols-4 gap-8">
          {statsConstants.map((item, idx) => {
            return (
              <div className="text-center grid gap-3" key={idx}>
                <p className="text-4xl text-(--accent-strong) font-semibold font-(family-name:--font-display)">
                  {item.value}
                </p>
                <p className="text-xs text-(--text-dim)">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
