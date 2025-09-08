import { AnimatePresence, motion } from "motion/react";
import { FC } from "react";
import { cn } from "../../utils/helpers";
import { AlertType } from "./types";

type Props = {
  className?: string;
  type: AlertType;
  text: string;
};

const Alert: FC<Props> = ({ className, type, text }) => {
  const alertVariants = {
    [AlertType.Danger]: {
      bgColor: "bg-red-800",
      errorTypeColor: "bg-red-500",
      text: "Failed",
    },
    [AlertType.Success]: {
      bgColor: "bg-royal",
      errorTypeColor: "bg-lavender",
      text: "Success",
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className={cn(className, "fixed bottom-5 right-5 z-50 flex items-center justify-center")}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div
          className={`p-2 ${alertVariants[type].bgColor} flex items-center rounded-md p-5 leading-none text-indigo-100 lg:inline-flex lg:rounded-full`}
        >
          <p
            className={`flex rounded-full ${alertVariants[type].errorTypeColor} mr-3 px-2 py-1 text-xs font-semibold uppercase`}
          >
            {alertVariants[type].text}
          </p>
          <p className="mr-2 text-left">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
