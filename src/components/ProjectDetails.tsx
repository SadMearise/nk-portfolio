import { forwardRef } from "react";
import { cn } from "../utils/helpers";
import { type Project } from "../pages/Home/sections/Projects";

type Props = Omit<Project, "id"> & {
  className?: string;
};

const ProjectDetails = forwardRef<HTMLDivElement, Props>(
  ({ className, title, subtitle, description, href, image, tags }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          className,
          "flex flex-col rounded-2xl border border-white/10 bg-gradient-to-l from-midnight to-navy shadow-sm",
        )}
      >
        <div className="relative aspect-video">
          <img
            src={image}
            alt={title}
            className="absolute size-full rounded-t-2xl object-cover"
          />
        </div>
        <div className="p-5">
          <h5 className="mb-1 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 text-base text-neutral-400">{subtitle}</p>
          <p className="text-sm leading-relaxed text-neutral-300">{description}</p>
          <div className="mt-7 flex sm:items-center sm:justify-between">
            <div className="hidden gap-3 sm:flex">
              {tags.map((tag) => (
                <img
                  key={tag.id}
                  src={tag.path}
                  alt={tag.name}
                  className="hover-lift size-8 rounded-lg"
                />
              ))}
            </div>
            <a
              className="hover-lift ml-auto inline-flex cursor-pointer items-center gap-1 text-nowrap font-medium"
              href={href}
              target="_blank"
            >
              <img
                src="assets/arrow-up.svg"
                alt="arrow-up icon"
                className="size-4"
              />
              View Project
            </a>
          </div>
        </div>
      </div>
    );
  },
);

export default ProjectDetails;
