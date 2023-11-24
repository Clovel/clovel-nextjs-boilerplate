'use client';

/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */
import { useSearchParams } from 'next/navigation';
import * as Yup from 'yup';
import { signIn } from 'next-auth/react';
import {
  useForm,
  Form,
} from '@/helpers/FormikHelpers';

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
import type { FormikHelpers } from 'formik';

/* Type declarations ----------------------------------- */
const signInFormData = Yup.object(
  {
    email: Yup.string()
      .email('Invalide email address')
      .required('Please enter your email address'),
    password: Yup.string()
      .required('Please enter your password'),
  }
).required();

type SignInFormData = Yup.InferType<typeof signInFormData>;

/* SignInForm component prop types --------------------- */
interface SignInFormProps {}

/* SignInForm component -------------------------------- */
const SignInForm: React.FC<SignInFormProps> = () => {
  const searchParams = useSearchParams();

  const handleSubmit = (
    values: SignInFormData,
    formikHelpers: FormikHelpers<SignInFormData>
  ): void => {
    signIn(
      'credentials',
      {
        ...values,
        redirect: true,
        callbackUrl: searchParams?.get('from') ?? '/',
      }
    )
      .then(
        (result) => {
          if(result?.ok !== true) {
            throw new Error(`Failed to sign in user. Please try again.`);
          }
          console.log(`[DEBUG] <SignInForm.handleSignIn> User sign in successful :`, result);
        }
      )
      .catch(
        (error) => {
          console.error(`[ERROR] <SignInForm.handleSignIn> Failed to sign in user :`, error);
        }
      )
      .finally(
        () => {
          formikHelpers.setSubmitting(false);
        }
      );
  };

  const formikForm = useForm(
    {
      initialValues: {
        email: searchParams?.get('email') ?? '',
        password: '',
      },
      onSubmit: handleSubmit,
      validationSchema: signInFormData,
      validateOnChange: false,
      validateOnBlur: false,
      enableReinitialize: true,
    }
  );

  return (
    <Card className="max-w-md w-full">
      <Form
        form={formikForm}
        noValidate
      >
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
            <Button
              variant="outline"
              disabled
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button
              variant="outline"
              disabled
            >
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
            <Button
              variant="outline"
              disabled
            >
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
              onChange={formikForm.handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              onChange={formikForm.handleChange}
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
          <Button
            className="w-full"
            type="submit"
            disabled={formikForm.isSubmitting}
          >
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
      </Form>
    </Card>
  );
};

/* Export SignInForm component ------------------------- */
export default SignInForm;
