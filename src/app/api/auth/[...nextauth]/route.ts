// /* Module imports -------------------------------------- */
// import NextAuth from 'next-auth';
// import CredentialsProvider from 'next-auth/providers/credentials';

// /* Type imports ---------------------------------------- */
// import type { NextAuthOptions } from 'next-auth';

// /* NextAuth configuration ------------------------------ */
// const nextAuthConfig: NextAuthOptions = {
//   session: {
//     strategy: 'jwt',
//   },
//   pages: {
//     signIn: '/sign-in',
//   },
//   providers: [
//     CredentialsProvider(
//       {
//         // The name to display on the sign in form (e.g. "Sign in with...")
//         name: 'Credentials',
//         type: 'credentials',
//         credentials: {
//           email: {
//             label: 'Email',
//             type: 'text',
//           },
//           password: {
//             label: 'Password',
//             type: 'password',
//           },
//         },
//         authorize: (credentials) => {
//           console.log(`[DEBUG] <NextAuth.CredentialsProvider.authorize> Attempting sign in with credentials :`, credentials);

//           if(!credentials) {
//             return null;
//           }

//           return {
//             id: 'test-user-id',
//             email: credentials.email,
//           };
//         },
//       }
//     ),
//   ],
//   callbacks: {
//     jwt: (jwtArgs) => {
//       console.log(`[DEBUG] <NextAuth.jwt> jwtArgs :`, jwtArgs);
//       return jwtArgs;
//     },
//     session: (sessionArgs) => {
//       console.log(`[DEBUG] <NextAuth.session> sessionArgs :`, sessionArgs);
//       return sessionArgs.session;
//     },
//   },
// };

// // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
// const nextAuthHandler = NextAuth(nextAuthConfig);
// export {
//   nextAuthHandler as GET,
//   nextAuthHandler as POST,
// };
