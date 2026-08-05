import { experienceConstants } from "@/lib/data";
import Heading from "../Common/Heading";
import ExperienceTimeline from "./ExperienceTimeline";

type Props = {};

const ExperienceSection = (props: Props) => {
  const experience_list = experienceConstants
    .flatMap(({ company: company_name, website, work_exp }) => {
      let count = work_exp.length + 1;
      return work_exp.map((job) => {
        count--;
        return {
          ...job,
          company_name,
          website,
          version: count,
          start_date_string: new Date(job.start_date).toLocaleString(
            "default",
            { month: "short", year: "numeric" },
          ),
          end_date_string: job.currently_working
            ? "Present"
            : new Date(job.end_date).toLocaleString("default", {
                month: "short",
                year: "numeric",
              }),
        };
      });
    })
    .sort(
      (a, b) =>
        new Date(b.start_date).getTime() - new Date(a.start_date).getTime(),
    );

  return (
    <div className="scroll-mt-17.75" id="experience">
      <div className="section_container grid px-6 py-16 gap-5">
        <Heading
          title="Experience"
          sub_title="Shipped my way from junior dev to leading the team."
          desc="Every role, every internship, one continuous climb."
        />
        <ExperienceTimeline list={experience_list} />
      </div>
    </div>
  );
};

export default ExperienceSection;
