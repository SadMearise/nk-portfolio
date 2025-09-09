import { FC } from "react";
import { cn } from "../utils/helpers";
import { useCopyToClipboard } from "../utils/hooks";
import { AnimatePresence, motion } from "motion/react";

type Props = {
  className?: string;
  label?: string;
  successMessage?: string;
  textToCopy: string;
};

const CopyButton: FC<Props> = ({ className, label, successMessage, textToCopy }) => {
  const { isCopied, copyToClipboard } = useCopyToClipboard();

  return (
    <motion.button
      className={cn(
        className,
        "relative w-48 cursor-pointer overflow-hidden rounded-full bg-primary px-1 py-4 text-center text-sm font-extralight",
      )}
      onClick={() => copyToClipboard(textToCopy)}
      whileHover={{ y: -5 }}
      whileTap={{ scale: 1.05 }}
    >
      <AnimatePresence mode="wait">
        {isCopied ? (
          <motion.p
            key="copied"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <img
              src="assets/images/copy-done.svg"
              alt="copied icon"
              className="w-5"
            />
            {successMessage}
          </motion.p>
        ) : (
          <motion.p
            key="copy"
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            <img
              src="assets/images/copy.svg"
              alt="copy icon"
              className="w-5"
            />
            {label}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyButton;
