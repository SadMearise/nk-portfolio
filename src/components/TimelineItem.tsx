import { FC } from "react";
import { cn } from "../utils/helpers";
import { Experience } from "../pages/Home/sections/Experiences";

type Props = Experience & {
  className?: string;
};

const TimelineItem: FC<Props> = ({ className, date, title, job, descriptions }) => {
  return (
    <div className={cn(className, "flex justify-start md:gap-10")}>
      <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
        <div className="absolute left-[-15px] flex size-10 items-center justify-center rounded-full bg-midnight">
          <div className="size-4 rounded-full border border-neutral-700 bg-neutral-800 p-2" />
        </div>
        <div className="hidden flex-col gap-2 text-xl font-bold text-neutral-300 md:flex md:pl-20 md:text-4xl">
          <h3>{date}</h3>
          <h3 className="text-3xl text-neutral-400">{title}</h3>
          <h3 className="text-3xl text-neutral-500">{job}</h3>
        </div>
      </div>

      <div className="relative w-full pl-20 pr-4 md:pl-4">
        <div className="mb-4 block text-left text-2xl font-bold text-neutral-300 md:hidden ">
          <h3>{date}</h3>
          <h3>{job}</h3>
        </div>
        {descriptions.map((description, index) => (
          <p
            className="mb-3 font-normal text-neutral-400"
            key={index}
          >
            {description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
