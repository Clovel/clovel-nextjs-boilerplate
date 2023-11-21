/* Framework imports ----------------------------------- */
import React from 'react';
import SignInForm from './SignUpForm';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* SignUpPage component prop types --------------------- */
interface SignUpPageProps {}

/* SignUpPage component -------------------------------- */
const SignUpPage: React.FC<SignUpPageProps> = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

/* Export SignUpPage component ------------------------- */
export default SignUpPage;
