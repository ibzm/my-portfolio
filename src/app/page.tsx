// app/projects/page.tsx or components/Projects.tsx
"use client";
import React from 'react';
import ProjectCard from "@/app/components/ProjectCard";
 
export default function Home() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
    Projectcard
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          title="Portfolio Website"
          description="A personal portfolio currently showcasing my skills, projects,  this is to show that is is deploying correctand experience addiung stuff to the end now ."
          techStack="Next.js, Tailwind CSS"
          link="https://github.com/ibzm/my-portfolio"
        />
        <ProjectCard
          title="Library Management System"
          description="A system for managing library books, members, and loans."
          techStack="C#, SQL, Windows Forms"
          link="https://github.com/ibzm/Libary_Management_system"
        />
        {/* Add more projects here */}
      </div>
    </section>
  );
}
