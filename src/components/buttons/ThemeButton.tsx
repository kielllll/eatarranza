'use client';

import clsx from 'clsx';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      className={clsx(
        'rounded-md p-2 focus:outline-none md:p-2.5',
        'border dark:border-gray-600',
        'hover:border-primary-300 hover:text-primary-300 dark:hover:border-primary-300 dark:hover:text-primary-300',
        'focus-visible:border-primary-300 focus-visible:text-primary-300 dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300',
        'text-lg md:text-xl',
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'light' ? <FiMoon /> : <FiSun />}
    </button>
  );
}
