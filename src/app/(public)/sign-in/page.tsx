/* Framework imports ----------------------------------- */
import React from 'react';
import SignInForm from './SignInForm';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* SignInPage component prop types --------------------- */
interface SignInPageProps {}

/* SignInPage component -------------------------------- */
const SignInPage: React.FC<SignInPageProps> = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

/* Export SignInPage component ------------------------- */
export default SignInPage;
