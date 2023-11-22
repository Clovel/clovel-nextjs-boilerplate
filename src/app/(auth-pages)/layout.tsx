/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import Link from 'next/link';
import { Icons } from '@/components/icons/icons';
import Footer from '@/components/Footer/Footer';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* AuthPagesLayout component prop types ---------------- */
interface AuthPagesLayoutProps {
  children: React.ReactNode;
}

/* AuthPagesLayout component --------------------------- */
const AuthPagesLayout: React.FC<AuthPagesLayoutProps> = ({ children }) => {
  return (
    <>
      <nav className="fixed p-4">
        <Link
          className="flex items-center justify-center gap-2"
          href="/"
        >
          <Icons.arrowLeft/>
          Home page
        </Link>
      </nav>
      <main className="grid grid-cols-2 h-full">
        <section className="flex flex-col justify-center items-center">
          {children}
          <Footer />
        </section>
        <aside className="flex justify-center items-center">
          <h1 className="text-4xl font-bold text-center">
            Welcome to this wonderful application !!!
          </h1>
        </aside>
      </main>
    </>
  );
};

/* Export AuthPagesLayout component -------------------- */
export default AuthPagesLayout;
