/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import ForgotPasswordForm from './ForgotPasswordForm';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* ForgotPasswordPage component prop types ------------- */
interface ForgotPasswordPageProps {}

/* ForgotPasswordPage component ------------------------ */
const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ForgotPasswordForm />
    </div>
  );
};

/* Export ForgotPasswordPage component ----------------- */
export default ForgotPasswordPage;
