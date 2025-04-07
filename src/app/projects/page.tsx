<<<<<<< Updated upstream
// app/projects/page.tsx or components/Projects.tsx
import ProjectCard from '../components/ProjectCard'; // Adjust the import path as necessary
=======
"use client"; 

import React from 'react';
import Projectcard from "@/app/components/ProjectCard";
>>>>>>> Stashed changes

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Projectcard
          title="Portfolio Website"
          description="A personal portfolio showcasing my skills, projects, and experience."
          techStack="Next.js, Tailwind CSS"
          link="https://github.com/ibzm/my-portfolio"
        />
        <Projectcard
          title="Library Management System"
          description="A system for managing library books, members, and loans."
          techStack="C#, SQL, Windows Forms"
          link="https://github.com/ibzm/Libary_Management_system"
        />
        {/* Add more projects here */}
      </div>
    </section>
  );
};

export default Projects;
