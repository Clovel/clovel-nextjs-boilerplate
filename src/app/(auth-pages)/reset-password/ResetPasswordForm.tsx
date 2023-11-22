/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import Link from 'next/link';
import { Button } from '@shadcn/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shadcn/card';
import { Label } from '@shadcn/label';
import { Input } from '@shadcn/input';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* ResetPasswordForm component prop types -------------- */
interface ResetPasswordFormProps {}

/* ResetPasswordForm component ------------------------- */
const ResetPasswordForm: React.FC<ResetPasswordFormProps> = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Reset your password
        </CardTitle>
        <CardDescription>
          Be sure to keep it safe this time 😏
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            type="password"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">
            Confirm password
          </Label>
          <Input
            id="password"
            type="password"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-stretch">
        <Button className="w-full">
          Reset password
        </Button>
      </CardFooter>
    </Card>
  );
};

/* Export ResetPasswordForm component ------------------ */
export default ResetPasswordForm;
