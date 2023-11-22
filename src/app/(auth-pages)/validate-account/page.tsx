/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import ValidationPending from './ValidationPending';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* ValidateAccountPage component prop types ------------ */
interface ValidateAccountPageProps {}

/* ValidateAccountPage component ----------------------- */
const ValidateAccountPage: React.FC<ValidateAccountPageProps> = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <ValidationPending />
    </div>
  );
};

/* Export ValidateAccountPage component ---------------- */
export default ValidateAccountPage;
