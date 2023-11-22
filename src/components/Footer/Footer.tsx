/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* Footer component prop types ------------------------- */
interface FooterProps {}

/* Footer component ------------------------------------ */
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="p-4 flex-grow-0 flex-shrink-0">
      Made with ❤️ by
      {' '}
      <a
        href="https://github.com/Clovel"
        target="_blank"
        rel="noopener noreferrer"
      >
        Clovel
      </a>
      {' '}
      ©
      {' '}
      {new Date().getFullYear()}
    </footer>
  );
};

/* Export Footer component ----------------------------- */
export default Footer;
