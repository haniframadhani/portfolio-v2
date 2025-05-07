"use client";

import { useState } from "react";
import ProjectModal from "./project_modal";
import ProjectCard from "./project_card";
import Projects from "@/types/projects";

interface ProjectsGridProps {
  projects: Projects[];
}

const ProjectsGrid = ({ projects }: ProjectsGridProps) => {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: (typeof projects)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="mx-5 mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            title={project.title}
            imageSrc={project.src}
            key={index}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};
export default ProjectsGrid;
