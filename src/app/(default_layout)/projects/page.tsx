import { Metadata } from 'next';

import { useGetAllProjects } from '@/hooks/useProjects';

import ProjectCard from '@/components/content/projects/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Showcase of my projects.',
  robots: 'follow, index',
};

export default async function ProjectsPage() {
  const { projects } = await useGetAllProjects();

  return (
    <main>
      <section>
        <div className='layout min-h-main py-20'>
          <h1 className='text-3xl md:text-5xl'>My Projects</h1>
          <p className='mt-2'>A collection of my work and contributions.</p>

          <ul className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
            {projects?.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
