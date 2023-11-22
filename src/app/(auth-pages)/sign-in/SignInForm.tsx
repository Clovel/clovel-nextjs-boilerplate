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
import { Icons } from '@/components/icons/icons';
import { Label } from '@shadcn/label';
import { Input } from '@shadcn/input';

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */

/* SignInForm component prop types --------------------- */
interface SignInFormProps {}

/* SignInForm component -------------------------------- */
const SignInForm: React.FC<SignInFormProps> = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Sign in
        </CardTitle>
        <CardDescription>
          Enter your credentials below to sign in your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Button variant="outline">
            <Icons.apple className="mr-2 h-4 w-4" />
            Apple
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="bruce.wayne@wayneenterprises.com"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            type="password"
          />
        </div>
        <div>
          <Link href="/forgot-password">
            <span className="text-xs">
              Forgot your password ?
            </span>
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-stretch">
        <Button className="w-full">
          Sign in
        </Button>

        <div className="h-3" />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Need an account ?
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center">
          <Link
            className="flex items-center text-sm font-medium text-muted-foreground"
            href="/sign-up"
          >
            Sign up !
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

/* Export SignInForm component ------------------------- */
export default SignInForm;
