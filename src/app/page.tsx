// app/page.tsx
import Hero from '@/app/components/Hero';
import About from '@/app/components/about';
import ProjectCard from '@/app/components/ProjectCard';
import Contact from '@/app/components/contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <section id="projects" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="Portfolio Website does this also upload when i deploy "
            description="A personal portfolio showcasing my skills, projects, and experience."
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
      <Contact />
    </main>
  );
}
