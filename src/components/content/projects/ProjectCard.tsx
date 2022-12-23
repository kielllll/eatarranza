import clsx from 'clsx';
import * as React from 'react';

import CloudinaryImg from '@/components/images/CloudinaryImage';
import UnstyledLink from '@/components/links/UnstyledLink';

import { ProjectFrontmatter } from '@/types/mdx';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`/projects/${project.slug}`}
        className='flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
      >
        <h4>{project.title}</h4>
        <p className='mb-auto text-sm text-gray-700 dark:text-gray-300'>
          {project.description}
        </p>

        <CloudinaryImg
          className='pointer-events-none mt-3 w-full'
          publicId={`eatarranza/${project.banner}`}
          alt={project.title}
          width={1440}
          height={792}
          preview={false}
        />

        <p className='animated-underline mt-2 inline-block font-medium'>
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
