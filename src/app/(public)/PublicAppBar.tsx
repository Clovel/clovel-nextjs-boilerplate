/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import Link from 'next/link';
import Image from 'next/image'

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* PublicAppBar component prop types ------------------- */
interface PublicAppBarProps {}

/* PublicAppBar component ------------------------------ */
const PublicAppBar: React.FC<PublicAppBarProps> = () => {
  return (
    <header className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex flex-grow-0 flex-shrink-0">
      <div className="flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>

      <nav className="flex w-full items-center justify-end gap-4">
        <div className="p-4">
          <Link href="/sign-in">
            Sign in
          </Link>
        </div>
        <div className="p-4">
          <Link href="/sign-up">
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
};

/* Export PublicAppBar component ----------------------- */
export default PublicAppBar;
