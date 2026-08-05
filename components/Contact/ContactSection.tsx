import { LinkButton } from "../Common/Buttons";

type Props = {};

const ContactSection = (props: Props) => {
  return (
    <div className="scroll-mt-17.75!" id="contact">
      <div className="section_container grid  px-6 py-16 gap-5 ">
        <div className="rounded-3xl border border-(--border) bg-(--surface) p-14 max-sm:p-8 flex flex-col gap-4 items-center">
          <p className="inline-flex w-fit   items-center gap-2 font-mono text-[12.5px] uppercase tracking-[0.08em] text-(--gold) before:h-1.5 before:w-1.5 before:rounded-full before:bg-(--gold) before:shadow-[0_0_8px_var(--gold)] before:content-[''] before:animate-pulse">
            Let's Talk
          </p>
          <h1 className="text-[clamp(1.75rem,6vw+0.5rem,2.625rem)] font-(family-name:--font-display) tracking-tighter font-medium text-center">
            Building something worth shipping?
          </h1>
          <p className="text-(--text-muted) text-center max-w-md">
            Open to full-stack and AI-engineering roles — happy to walk through
            any of the projects above in more detail.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center mt-6">
            <LinkButton
              text="devanand151101@gmail.com"
              href="mailto:devanand151101@gmail.com"
              varient="fill"
            />
            <LinkButton text="+91 9176204928" href="tel:+919176204928" arrow />
            <LinkButton
              text="Linkedin"
              href="https://www.linkedin.com/in/devanand-m-9a22351b3"
              arrow
            />
            <LinkButton
              text="Github"
              href="https://github.com/Deva0813"
              arrow
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
