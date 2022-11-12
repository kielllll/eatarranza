import * as React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

import UnstyledLink from '@/components/links/UnstyledLink';

export default function Footer() {
  return (
    <footer className='mt-4 pb-2'>
      <main className='layout flex flex-col items-center border-t pt-6'>
        <p className='font-medium'>Reach me out</p>
        <SocialLinks />
        <p className='mt-4 text-sm'>
          © Ezekiel Tarranza {new Date().getFullYear()}
        </p>
      </main>
    </footer>
  );
}

const SocialLinks = () => {
  return (
    <div className='mt-2 flex space-x-4'>
      {socials.map((social) => (
        <UnstyledLink
          className='inline-flex items-center justify-center rounded-sm focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
          href={social.href}
          key={social.href}
        >
          <social.icon className='my-auto h-6 w-6 align-middle text-gray-600 transition-colors hover:text-primary-300 dark:text-gray-300 dark:hover:text-primary-300' />
        </UnstyledLink>
      ))}
    </div>
  );
};

const socials = [
  {
    href: 'https://github.com/kielllll',
    icon: SiGithub,
    id: 'Github',
    text: <>See my projects on Github</>,
  },
  {
    href: 'https://www.linkedin.com/in/ezekiel-tarranza',
    icon: SiLinkedin,
    id: 'Linkedin',
    text: <>Find me on Linkedin</>,
  },
];
