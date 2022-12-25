import { GetStaticPaths, GetStaticProps } from 'next';
import * as React from 'react';
import { HiLink } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

import { getFileBySlug, getFiles } from '@/lib/mdx';

import CustomLink from '@/components/links/CustomLink';
import Seo from '@/components/Seo';

import { ProjectType } from '@/types/mdx';

export default function SingleProjectPage({ frontmatter }: ProjectType) {
  return (
    <>
      <Seo
        templateTitle={frontmatter.title}
        description={frontmatter.description}
        date={new Date(frontmatter.publishedAt).toISOString()}
      />

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
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const project = await getFileBySlug(params?.slug as string);

  return {
    props: { ...project },
  };
};
