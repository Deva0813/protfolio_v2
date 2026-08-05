type Props = {
  title: string;
  desc: string;
  tech_stack: string[];
  sub: string;
  index: number;
};

const ProjectCard = (props: Props) => {
  return (
    <div
      key={props.index}
      className="bg-(--surface) rounded-(--radius) border border-(--border) p-6"
    >
      <p className="font-mono text-(--text-dim) text-xs ">
        0{props.index + 1} / {props.sub}
      </p>
      <h4 className="font-(family-name:--font-display) text-xl mt-5 font-semibold">
        {props.title}
      </h4>
      <p className="text-[.9375rem] text-(--text-muted) mt-2">{props.desc}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {props.tech_stack.map((item, idx) => (
          <span
            className="block font-mono rounded-sm bg-(--accent-dim) text-(--accent-strong) text-xs  px-2.5 py-1.5"
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
