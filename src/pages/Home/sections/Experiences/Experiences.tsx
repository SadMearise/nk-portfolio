import { FC } from "react";
import { cn } from "../../../../utils/helpers";
import { Timeline, TimelineItem } from "../../../../components";
import { EXPERIENCES } from "./constants";

type Props = {
  className?: string;
};

const Experiences: FC<Props> = ({ className }) => {
  return (
    <section className={cn(className, "x-indent section-gap")}>
      <h2 className="heading-2">My Work Experience</h2>
      <Timeline
        className="pb-20"
        items={EXPERIENCES}
        renderItem={(experience, index) => (
          <TimelineItem
            key={index}
            title={experience.title}
            job={experience.job}
            date={experience.date}
            descriptions={experience.descriptions}
            className="pt-10 md:pt-40"
          />
        )}
      />
    </section>
  );
};

export default Experiences;
