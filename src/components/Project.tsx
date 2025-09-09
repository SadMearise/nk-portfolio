import { FC } from "react";
import { cn } from "../utils/helpers";
import { type Project as ProjectType } from "../pages/Home/sections/Projects";

type Props = Pick<ProjectType, "title" | "tags"> & {
  className?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onOpen: () => void;
};

const Project: FC<Props> = ({ className, title, tags, onMouseEnter, onMouseLeave, onOpen }) => {
  return (
    <>
      <div
        className={cn(className, "flex items-center justify-between gap-2 py-10 sm:flex-nowrap")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div>
          <p className="text-2xl">{title}</p>
          <div className="mt-2 flex flex-wrap gap-5">
            {tags.map((tag) => (
              <span
                className="whitespace-nowrap text-sand"
                key={tag.id}
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
        <button
          className="hover-lift mt-auto flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap sm:mt-0"
          onClick={onOpen}
        >
          Read More
          <img
            src="assets/images/arrow-right.svg"
            alt="read more icon"
            className="w-5"
          />
        </button>
      </div>
    </>
  );
};

export default Project;
