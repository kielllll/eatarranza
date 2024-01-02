import { Metadata } from 'next';
import * as React from 'react';
import { HiLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { getFileBySlug } from '@/lib/mdx';
import { useGetProject } from '@/hooks/useProject';

import CustomLink from '@/components/links/CustomLink';

type Props = {
  params: { slug: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const { frontmatter } = await getFileBySlug(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    robots: 'follow, index',
  };
}

export default async function SingleProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const { frontmatter } = await useGetProject({ slug });

  return (
    <main>
      <section className=''>
        <div className='layout min-h-main py-20'>
          <h1 className='mt-4'>{frontmatter.title}</h1>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
            {frontmatter.description}
          </p>

          <div className='mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300'>
            {frontmatter.github && (
              <div className='inline-flex items-center gap-2'>
                <SiGithub className='text-white-800 text-lg dark:text-white' />
                <CustomLink href={frontmatter.github} className='mt-1'>
                  Repository
                </CustomLink>
              </div>
            )}
            {frontmatter.link && (
              <div className='inline-flex items-center gap-2'>
                <HiLink className='text-lg text-gray-800 dark:text-white' />
                <CustomLink href={frontmatter.link} className='mt-1'>
                  Open Live Site
                </CustomLink>
              </div>
            )}
          </div>

          <hr className='mt-4 dark:border-gray-600' />

          <div className='mt-8 flex flex-col items-start gap-4 md:flex-row-reverse md:justify-between'>
            <CustomLink href='/projects'>← Back to projects</CustomLink>
          </div>
        </div>
      </section>
    </main>
  );
}
