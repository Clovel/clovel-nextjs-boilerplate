"use client"

/* Framework imports ----------------------------------- */
import * as React from "react"

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import { ThemeProvider as NextThemesProvider } from "next-themes"

/* Style imports --------------------------------------- */

/* Type imports ---------------------------------------- */
import type { ThemeProviderProps } from "next-themes/dist/types";

/* ThemeProvider component ----------------------------- */
const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...props
}) => {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  );
};

/* Export ThemeProvider component ---------------------- */
export default ThemeProvider;
