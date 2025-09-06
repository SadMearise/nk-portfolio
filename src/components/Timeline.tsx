"use client";
import { useTransform, motion } from "motion/react";
import { ReactNode, useRef } from "react";
import { useTimelineScroll } from "../utils/hooks";
import { cn } from "../utils/helpers";

type Props<T> = {
  className?: string;
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
};

const Timeline = <T,>({ className, items, renderItem }: Props<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { height, heightTransform, scrollYProgress } = useTimelineScroll(containerRef, {
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className={cn(className, "w-full")}>
      <div
        ref={containerRef}
        className="relative"
      >
        {items.map((item, index) => renderItem(item, index))}
        <div
          style={{
            height: `${height}px`,
          }}
          className="absolute left-1 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-0% via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]  md:left-1 "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 from-0% via-lavender/50 via-10% to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
