import clsx from 'clsx';
import * as React from 'react';
import {
  SiAmazonaws,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

export default function TechStack() {
  return (
    <div className='flex space-x-2 md:space-x-4'>
      {stacks.map((tech) => (
        <tech.icon
          key={tech.id}
          className={clsx(
            'h-8 w-8 md:h-10 md:w-10',
            'hover:text-primary-300 dark:hover:text-primary-300',
            'transition-colors'
          )}
        />
      ))}
    </div>
  );
}

const stacks = [
  {
    id: 'nextjs',
    icon: SiNextdotjs,
  },
  {
    id: 'react',
    icon: SiReact,
  },
  {
    id: 'typescript',
    icon: SiTypescript,
  },
  {
    id: 'tailwind',
    icon: SiTailwindcss,
  },
  {
    id: 'aws',
    icon: SiAmazonaws,
  },
];
