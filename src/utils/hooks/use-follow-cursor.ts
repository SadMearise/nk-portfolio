import { useMotionValue, useSpring } from "motion/react";
import { MouseEvent } from "react";

const useFollowCursor = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };

  return { springX, springY, handleMouseMove };
};

export default useFollowCursor;
