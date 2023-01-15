import clsx from 'clsx';

import useLoaded from '@/hooks/useLoaded';

import CloudinaryImg from '@/components/images/CloudinaryImage';
import Seo from '@/components/Seo';
import TechStack from '@/components/TechStack';

export default function AboutPage() {
  const isLoaded = useLoaded();

  return (
    <>
      <Seo templateTitle='About' />

      <main>
        <section className={clsx(isLoaded && 'fade-in-start')}>
          <div className='layout min-h-main py-20'>
            <h2 data-fade='0'>About</h2>
            <h1 className='mt-1' data-fade='1'>
              Ezekiel Tarranza
            </h1>
            <div className='mt-4' data-fade='2'>
              <CloudinaryImg
                className='float-right ml-6 w-36 md:w-72'
                publicId='eatarranza/zeke_ci0qpb.jpg'
                width='1350'
                height='1800'
                alt='Photo of me'
                preview={false}
              />
              <article className='prose dark:prose-invert'>
                <p data-fade='3'>
                  Hello! I'm Ezekiel. I first experienced web development during
                  my college years in 2018. There was really a lot to learn but
                  it seems that web development really caught my attention. It
                  was my first hello world in the web!
                </p>
                <p data-fade='4'>
                  There are really a lot of things to learn in web development
                  and I am motivated to learn as much as possible. Currently I'm
                  focusing into frontend development but with the rise of many
                  techonologies and tech stacks, I'll be pursuing to transition
                  into a full stack web developer.
                </p>
                <p data-fade='5'>
                  Aside from taking the course of Bachelor of Science in
                  Computer Science, I also took a coding bootcamp to further
                  improve my skillset specifically in web development. The most
                  important thing in here as well is self-learning!
                </p>
                <p data-fade='6'>
                  As a software developer based in the Philippines, I am
                  passionate about turning ideas into tangible solutions.
                  Whether it's developing a new application or implementing a
                  complex system, I enjoy the challenge of bringing concepts to
                  life through code. I am always looking for ways to grow and
                  improve my skills, and I thrive on the opportunity to work on
                  projects that make a meaningful impact.
                </p>
                <p data-fade='7'>
                  In this website. You will see my experiences on my career as a
                  developer. In the future, this will also include some blogs
                  which I hope to inspire other to pursue web development as
                  well.
                </p>
              </article>
              <h3 className='mt-12'>Current Favorite Tech Stack</h3>
              <figure className='mt-2'>
                <TechStack />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
