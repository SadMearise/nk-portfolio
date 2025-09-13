import { FC } from "react";
import { cn } from "../utils/helpers";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

type Props = {
  className?: string;
};

const ParallaxBackground: FC<Props> = ({ className }) => {
  const { scrollYProgress } = useScroll();
  const smoothScrollYProgress = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(smoothScrollYProgress, [0, 0.5], ["0%", "70%"]);
  const planetsX = useTransform(smoothScrollYProgress, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(smoothScrollYProgress, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(smoothScrollYProgress, [0, 0.5], ["0%", "0%"]);

  return (
    <div className={cn(className, "absolute inset-0 overflow-y-hidden")}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 -z-50 bg-[url('/assets/images/sky.webp')] bg-cover bg-bottom" />
      <motion.div
        className="absolute inset-0 -z-40 bg-[url('/assets/images/mountain-3.webp')] bg-cover bg-bottom"
        style={{ y: mountain3Y }}
      />
      <motion.div
        className="absolute inset-0 -z-30 bg-[url('/assets/images/planets.webp')] bg-cover bg-bottom"
        style={{ x: planetsX }}
      />
      <motion.div
        className="absolute inset-0 -z-20 bg-[url('/assets/images/mountain-2.webp')] bg-cover bg-bottom"
        style={{ y: mountain2Y }}
      />
      <motion.div
        className="absolute inset-0 -z-10 bg-[url('/assets/images/mountain-1.webp')] bg-cover bg-bottom"
        style={{ y: mountain1Y }}
      />
    </div>
  );
};

export default ParallaxBackground;
