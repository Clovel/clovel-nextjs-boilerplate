/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import PublicAppBar from './PublicAppBar';
import Footer from '@/components/Footer/Footer';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* PublicLayout component prop types ------------------- */
interface PublicLayoutProps {
  children?: React.ReactNode;
}

/* PublicLayout component ------------------------------ */
const PublicLayout: React.FC<PublicLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <PublicAppBar />
      <div className="flex flex-col items-center justify-center flex-1">
        {children}
      </div>
      <Footer />
    </main>
  );
};

/* Export PublicLayout component ----------------------- */
export default PublicLayout;
