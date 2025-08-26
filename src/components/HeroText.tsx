import { FC } from "react";
import { cn } from "../utils/helpers";
import FlipWords from "./FlipWords";
import { motion } from "motion/react";

type Props = {
  className?: string;
};

const HeroText: FC<Props> = ({ className }) => {
  const motionVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <div className={cn(className, "rounded-3xl bg-clip-text text-center md:text-left")}>
      <div className="x-indent flex flex-col space-y-6 md:space-y-0">
        <motion.h1
          className="text-4xl font-medium"
          variants={motionVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
        >
          Hi, I'm Nikita
        </motion.h1>
        <div className="flex flex-col items-center md:items-start">
          <motion.p
            className="hidden text-5xl font-medium text-neutral-300 md:block"
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.2 }}
          >
            A developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.p
            className="text-5xl font-black text-neutral-300 md:hidden"
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={["Secure", "Modern", "Scalable"]}
              className="text-7xl font-black text-white md:text-8xl"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={motionVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.8 }}
          >
            Web solutions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
