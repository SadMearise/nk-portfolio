import { FC, useContext, useRef } from "react";
import { cn } from "../utils/helpers";
import { ModalContext } from "../context/modal";
import { useOnClickOutside, useScrollLock } from "../utils/hooks";
import { motion } from "motion/react";
import { type Project } from "../pages/Home/sections/Projects";
import ProjectDetails from "./ProjectDetails";

type Props = Omit<Project, "id"> & {
  className?: string;
};

const ProjectDetailsModal: FC<Props> = ({
  className,
  title,
  subtitle,
  description,
  href,
  image,
  tags,
}) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  const { isOpen, close } = useContext(ModalContext);

  useScrollLock(isOpen);
  useOnClickOutside(detailsRef, close);

  return (
    <div
      className={cn(
        className,
        "fixed inset-0 z-50 flex size-full items-center justify-center overflow-hidden bg-black/50",
      )}
    >
      <motion.div
        className="relative m-4 max-h-[80vh] max-w-xl overflow-auto rounded-2xl md:max-w-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <ProjectDetails
          ref={detailsRef}
          title={title}
          subtitle={subtitle}
          description={description}
          href={href}
          image={image}
          tags={tags}
        />
        <button
          onClick={close}
          className="absolute right-5 top-5 rounded-sm bg-midnight p-2 hover:bg-gray-500"
        >
          <img
            src="assets/images/close.svg"
            alt="close icon"
            className="size-6"
          />
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectDetailsModal;
