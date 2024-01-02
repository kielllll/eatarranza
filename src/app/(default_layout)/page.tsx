import clsx from 'clsx';
import { Metadata } from 'next';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

export const metadata: Metadata = {
  title: 'eatarranza',
  description: 'A collection of my work and my journey as a developer.',
  robots: 'follow, index',
};

export default function Home() {
  return (
    <main>
      <section
        className={clsx('min-h-main -mt-20 mb-20 flex flex-col justify-center')}
      >
        <article className='layout'>
          <h2 className='text-2xl md:text-4xl 2xl:text-5xl'>Hi!</h2>
          <h1 className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'>
            I am Ezekiel Tarranza
          </h1>
          <p
            className={clsx('mt-4 max-w-4xl md:mt-6', 'md:text-lg 2xl:text-xl')}
          >
            I am a software developer in the Philippines who likes to bring
            ideas into reality.
          </p>
          <div className='mt-8 md:!text-lg'>
            <ButtonLink href='/about'>Learn more about me</ButtonLink>
          </div>
          <div className='mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8'>
            <UnstyledLink
              href='https://drive.google.com/file/d/1X10kdgN62TyWYr2PAYywuPatp9fgB4aG/view?usp=sharing'
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}
            >
              <IoNewspaperSharp className='shrink-0' />
              <span>Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href='https://github.com/kielllll'
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}
            >
              <SiGithub className='shrink-0' />
              <span>kielllll</span>
            </UnstyledLink>
            <UnstyledLink
              href='https://www.linkedin.com/in/ezekiel-tarranza'
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}
            >
              <SiLinkedin className='shrink-0' />
              <span>@ezekiel-tarranza</span>
            </UnstyledLink>
          </div>
        </article>
      </section>
    </main>
  );
}
