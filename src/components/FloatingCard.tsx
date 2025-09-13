import { FC, RefObject } from "react";
import { cn } from "../utils/helpers";
import { motion, MotionStyle } from "motion/react";

type BaseProps = {
  className?: string;
  style?: MotionStyle;
  containerRef: RefObject<HTMLElement | null>;
};

type TextProps = {
  text: string;
  image?: never;
};

type ImageProps = {
  image: string;
  text?: never;
};

type Props = BaseProps & (TextProps | ImageProps);

const FloatingCard: FC<Props> = ({ className, style, containerRef, text, image }) => {
  if (image) {
    return (
      <motion.img
        style={style}
        className={cn(className, "absolute w-[60px] cursor-grab")}
        src={image}
        whileHover={{ scale: 1.05 }}
        drag
        dragConstraints={containerRef}
        dragElastic={1}
        alt="card icon"
      />
    );
  }

  return (
    <motion.div
      style={style}
      className={cn(
        className,
        "absolute min-w-32 cursor-grab whitespace-nowrap rounded-full bg-storm px-5 py-4 text-center text-xl font-extralight ring ring-gray-700",
      )}
      whileHover={{ scale: 1.05 }}
      drag
      dragConstraints={containerRef}
      dragElastic={1}
    >
      {text}
    </motion.div>
  );
};

export default FloatingCard;
