/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import ResetPasswordForm from './ResetPasswordForm';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */
import type { NextPage } from 'next';

/* ResetPasswordPage component prop types -------------- */
interface ResetPasswordPageProps {}

/* ResetPasswordPage component ------------------------- */
const ResetPasswordPage: NextPage<ResetPasswordPageProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ResetPasswordForm />
    </div>
  );
};

/* Export ResetPasswordPage component ------------------ */
export default ResetPasswordPage;
