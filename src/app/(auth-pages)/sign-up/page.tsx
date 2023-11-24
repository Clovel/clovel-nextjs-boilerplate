/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import SignInForm from './SignUpForm';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */
import type { NextPage } from 'next';

/* SignUpPage component prop types --------------------- */
interface SignUpPageProps {}

/* SignUpPage component -------------------------------- */
const SignUpPage: NextPage<SignUpPageProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <SignInForm />
    </div>
  );
};

/* Export SignUpPage component ------------------------- */
export default SignUpPage;
