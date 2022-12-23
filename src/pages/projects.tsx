import clsx from 'clsx';
import { InferGetStaticPropsType } from 'next';

import { getAllFilesFrontmatter } from '@/lib/mdx';
import useLoaded from '@/hooks/useLoaded';

import ProjectCard from '@/components/content/projects/ProjectCard';
import Seo from '@/components/Seo';

import { ProjectFrontmatter } from '@/types/mdx';

export default function ProjectsPage({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo templateTitle='Projects' description='Showcase of my projects.' />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h1 className='text-3xl md:text-5xl' data-fade='0'>
              My Projects
            </h1>
            <p data-fade='1' className='mt-2'>
              A collection of my work and contributions.
            </p>

            <ul
              data-fade='2'
              className='mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3'
            >
              {projects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllFilesFrontmatter<ProjectFrontmatter>('projects');

  return { props: { projects } };
}
