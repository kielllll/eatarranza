import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

import Seo from '@/components/Seo';

export default function ProjectsPage() {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo templateTitle='Projects' />

      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <div className='layout'>
            <h1
              className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
              data-fade='2'
            >
              My Projects
            </h1>
          </div>
        </section>
      </main>
    </>
  );
}
