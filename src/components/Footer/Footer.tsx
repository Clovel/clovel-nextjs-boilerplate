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
    <footer className="w-full p-4 flex-grow-0 flex-shrink-0 flex items-center justify-center">
      <span>
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
      </span>
    </footer>
  );
};

/* Export Footer component ----------------------------- */
export default Footer;
