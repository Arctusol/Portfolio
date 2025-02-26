
import React, { useState } from "react";
import Modal from "./Modal";

export interface Project {
  title: string;
  description: string;
  link: string;
  tech: string[];
  longDescription?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="group cursor-pointer h-full"
      >
        <div className="h-full p-6 rounded-xl card-gradient backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-neon/50 hover:shadow-lg hover:shadow-neon/5">
          <h3 className="text-xl font-semibold mb-3 text-neon group-hover:translate-x-1 transition-transform">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-neon">{project.title}</h2>
          
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-white/5 border border-white/10">
            <iframe
              src={project.link}
              className="w-full h-full"
              title={project.title}
            />
          </div>

          <div className="prose prose-invert max-w-none">
            <p>{project.longDescription || project.description}</p>
            
            <h3>Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-neon text-black hover:bg-neon-muted transition-colors"
            >
              Visiter le site
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
