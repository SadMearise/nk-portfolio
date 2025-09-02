import React, { FC, useContext, useState } from "react";
import { cn } from "../../../../utils/helpers";
import { PROJECTS } from "./constants";
import { Line, PreviewImage, Project, ProjectDetailsModal } from "../../../../components";
import { motion } from "motion/react";
import { useFollowCursor } from "../../../../utils/hooks";
import { ModalContext, ModalContextType } from "../../../../context/modal";
import { type Project as ProjectType } from "./projects.types";

type Props = {
  className?: string;
};

const MotionPreviewImage = motion(PreviewImage);

const Projects: FC<Props> = ({ className }) => {
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const { open, value: selectedProject } = useContext<ModalContextType<ProjectType>>(ModalContext);

  const { springX, springY, handleMouseMove } = useFollowCursor();

  return (
    <section
      className={cn(className, "x-indent section-gap relative")}
      onMouseMove={handleMouseMove}
    >
      <h2 className="heading-2">My Selected Projects</h2>
      <Line className="mt-12" />

      {PROJECTS.map((project) => (
        <React.Fragment key={project.id}>
          <Project
            title={project.title}
            tags={project.tags}
            onMouseEnter={() => setPreviewSrc(project.image)}
            onMouseLeave={() => setPreviewSrc(null)}
            onOpen={() => open(project)}
          />
          <Line />
        </React.Fragment>
      ))}

      {previewSrc && (
        <MotionPreviewImage
          className="fixed left-0 top-0 z-50 hidden sm:block"
          style={{ x: springX, y: springY }}
          src={previewSrc}
        />
      )}

      {selectedProject && (
        <ProjectDetailsModal
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          description={selectedProject.description}
          href={selectedProject.href}
          image={selectedProject.image}
          tags={selectedProject.tags}
        />
      )}
    </section>
  );
};

export default Projects;
