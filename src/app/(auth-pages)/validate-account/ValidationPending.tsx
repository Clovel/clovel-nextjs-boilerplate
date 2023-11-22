/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@shadcn/card';
import { Icons } from '@/components/icons/icons';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* ValidationPending component prop types -------------- */
interface ValidationPendingProps {}

/* ValidationPending component ------------------------- */
const ValidationPending: React.FC<ValidationPendingProps> = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          We are validating your account
        </CardTitle>
        <CardDescription>
          It will be ready momentarily...
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex justify-center items-center">
          <Icons.fadeLoader className="mr-2 h-6 w-6" />
        </div>
      </CardContent>
    </Card>
  );
};

/* Export ValidationPending component ------------------ */
export default ValidationPending;
