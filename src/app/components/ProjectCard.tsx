import React from "react";

// components/Projectcard.tsx
interface ProjectCardProps {
    title: string;
    description: string;
    techStack: string;
    link: string;
  }
  
  const ProjectCard = ({ title, description, techStack, link }: ProjectCardProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-2 text-lg">{description}</p>
        <p className="mt-4 text-sm text-gray-600">Tech Stack: {techStack}</p>
        <a href={link} className="mt-4 text-blue-600 underline">View Project</a>
      </div>
    );
  };
  
  export default ProjectCard;
  