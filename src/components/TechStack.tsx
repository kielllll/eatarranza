import clsx from 'clsx';
import * as React from 'react';
import {
  SiAmazonaws,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import Tooltip from '@/components/Tooltip';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <Tooltip key={tech.id} content={<p>{tech.tooltip}</p>}>
          <tech.icon
            className={clsx(
              'h-8 w-8 md:h-10 md:w-10',
              'hover:text-primary-300 dark:hover:text-primary-300',
              'transition-colors'
            )}
          />
        </Tooltip>
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
    tooltip: (
      <>
        Next.js, currently my go-to framework because of the static generation,
        dynamic paths, and built-in api.
      </>
    ),
  },
  {
    id: 'react',
    icon: SiReact,
    tooltip: (
      <>
        Create React App, first frontend framework that I learned, great if you
        are making an authenticated website.
      </>
    ),
  },
  {
    id: 'typescript',
    icon: SiTypescript,
    tooltip: <>Typescript, because it's Typescript :)</>,
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
    tooltip: <>Tailwind CSS, bye bootstrap.</>,
  },
  {
    id: 'aws',
    icon: SiAmazonaws,
    tooltip: (
      <>AWS, the first thing that introduced me to serverless solutions.</>
    ),
  },
];
