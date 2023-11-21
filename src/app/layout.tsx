/* Framework imports ----------------------------------- */
import React from 'react';

/* Module imports -------------------------------------- */

/* Component imports ----------------------------------- */
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider"

/* Style imports --------------------------------------- */
import { Inter } from 'next/font/google'
import './globals.css'

/* Type imports ---------------------------------------- */
import type { Metadata } from 'next'

/* Internal variables ---------------------------------- */
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

/* RootLayout component prop types --------------------- */
interface RootLayoutProps {
  children: React.ReactNode;
}

/* RootLayout component -------------------------------- */
const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

/* Export RootLayout component ------------------------- */
export default RootLayout;
