import * as React from 'react';
import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function IndexPage() {
  const isLoaded = useLoaded();

  return (
    <Layout>
      <Seo />

      <main>
        <section
          className={clsx(
            'min-h-main -mt-20 mb-20 flex flex-col justify-center',
            isLoaded && 'fade-in-start'
          )}
        >
          <article>
            <h2 className='text-2xl md:text-4xl 2xl:text-5xl' data-fade='1'>
              Hi!
            </h2>
            <h1
              className='mt-1 text-3xl md:text-5xl 2xl:text-6xl'
              data-fade='2'
            >
              I am Ezekiel Tarranza
            </h1>
          </article>
        </section>
      </main>
    </Layout>
  );
}
