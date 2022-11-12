import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

import Seo from '@/components/Seo';

export default function IndexPage() {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo />

      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <article className='layout'>
            <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
              Hi!
            </h2>
            <h1
              className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
              data-fade='2'
            >
              I am Ezekiel Tarranza
            </h1>
            <p
              className={clsx(
                'mt-4 max-w-4xl md:mt-6',
                'md:text-lg 2xl:text-xl'
              )}
              data-fade='3'
            >
              I am a software developer in the Philippines who likes to bring
              ideas to reality.
            </p>
          </article>
        </section>
      </main>
    </>
  );
}
