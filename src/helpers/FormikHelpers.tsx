/* Framework imports ----------------------------------- */
import React, {
  useEffect,
  useState,
} from 'react';
import {
  Form as FormikForm,
  FormikProvider,
  useFormik,
} from 'formik';

/* Type imports ---------------------------------------- */
import type {
  FormikContextType,
  FormikValues,
  FormikConfig,
} from 'formik';

/* Formik logic wrappers ------------------------------- */
export type FormProps<Value> = {
  form: FormikContextType<Value>;
  children: React.ReactNode;
  innerRef?: React.MutableRefObject<HTMLFormElement | undefined>;
} & React.ComponentProps<typeof FormikForm>;

export interface FormConfig<Values extends FormikValues = FormikValues> extends Omit<FormikConfig<Values>, 'onSubmit'> {
  onChange?: (pValues: Values) => void | Promise<void>;
  onSubmit?: FormikConfig<Values>['onSubmit'];
}

export const Form = <Values, >({ form, children, innerRef, ...rest }: FormProps<Values>): JSX.Element => {
  return (
    <FormikProvider value={form}>
      <FormikForm
        {...rest}
        ref={innerRef as React.MutableRefObject<HTMLFormElement>}
      >
        {children}
      </FormikForm>
    </FormikProvider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useForm = <Values extends FormikValues = FormikValues>(params: FormConfig<Values>) => {
  const [ firstUpdate, setFirstUpdate ] = useState<boolean>(true);
  const lFormikForm = useFormik<Values>(
    {
      onSubmit: () => { },
      ...params,
    },
  );

  useEffect(() => {
    if(firstUpdate === true) {
      setFirstUpdate(false);
    } else {
      if(params.onChange !== undefined) {
        Promise.resolve(params.onChange(lFormikForm.values)).catch(console.error);
      }
    }
  }, [
    params,
    firstUpdate,
    lFormikForm.values,
  ]);

  return lFormikForm;
};

export interface PersistedFormikConfig<Values extends FormikValues = FormikValues> extends FormConfig<Values> {
  persistDispatch: () => void; /* TODO : determine the correct prototype for this function */
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const usePersistedForm = <Values extends FormikValues = FormikValues>(params: PersistedFormikConfig<Values>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { persistDispatch, ...rest } = params;

  /* TODO : Persist formik state when necessary using persistDispatch */

  return useForm<Values>(rest);
};
