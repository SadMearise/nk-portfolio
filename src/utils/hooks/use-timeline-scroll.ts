import { RefObject, useEffect, useState } from "react";
import { useScroll, UseScrollOptions, useTransform } from "motion/react";

const useTimelineScroll = (ref: RefObject<HTMLElement | null>, scrollOptions: UseScrollOptions) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();

      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll(scrollOptions);

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);

  return { height, heightTransform, scrollYProgress };
};

export default useTimelineScroll;
