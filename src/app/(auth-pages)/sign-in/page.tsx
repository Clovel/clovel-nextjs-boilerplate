/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import SignInForm from './SignInForm';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */
import type { NextPage } from 'next';

/* SignInPage component prop types --------------------- */
interface SignInPageProps {}

/* SignInPage component -------------------------------- */
const SignInPage: NextPage<SignInPageProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <SignInForm />
    </div>
  );
};

/* Export SignInPage component ------------------------- */
export default SignInPage;
