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

/* SignUpForm component prop types --------------------- */
interface SignUpFormProps {}

/* SignUpForm component -------------------------------- */
const SignUpForm: React.FC<SignUpFormProps> = () => {
  return (
    <Card className="max-w-md w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">
          Create your account
        </CardTitle>
        <CardDescription>
          Enter your credentials below to create your account today !
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
        <div className="grid gap-2 grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="email">
              First name
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Clark"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">
              Last name
            </Label>
            <Input
              id="email"
              type="text"
              placeholder="Kent"
            />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="clark.kent@dailyplanet.com"
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
          Sign up
        </Button>

        <div className="h-3" />

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Already got an account ?
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

/* Export SignUpForm component ------------------------- */
export default SignUpForm;
