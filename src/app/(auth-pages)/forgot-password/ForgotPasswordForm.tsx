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

/* ForgotPasswordForm component prop types ------------- */
interface ForgotPasswordFormProps {}

/* ForgotPasswordForm component ------------------------ */
const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          You forgot you password ?
        </CardTitle>
        <CardDescription>
          Don't panic, we'll help you reset it.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="pepper.pots@starkindustries.com"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-stretch">
        <Button className="w-full">
          Send me a reset link
        </Button>

        <div className="h-3" />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Your remembered it ?
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <Link
            className="flex items-center text-sm font-medium text-muted-foreground"
            href="/sign-in"
          >
            Sign in !
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

/* Export ForgotPasswordForm component ----------------- */
export default ForgotPasswordForm;
