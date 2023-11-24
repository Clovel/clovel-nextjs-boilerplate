// /* Framework imports ----------------------------------- */
// import { getToken } from 'next-auth/jwt';
// import { withAuth } from 'next-auth/middleware';
// import { NextResponse } from 'next/server';

// /* Type imports ---------------------------------------- */
// import type { NextMiddlewareWithAuth } from 'next-auth/middleware';

// /* Internal variables ---------------------------------- */
// const authRoutes = [
//   '/sign-in',
//   '/sign-up',
//   '/forgot-password',
//   '/reset-password',
// ] as const;

// /* Authentication NextJS middleware -------------------- */
// const authMiddleware: NextMiddlewareWithAuth = async (req) => {
//   console.log(`[DEBUG] <authMiddleware> req :`, req);

//   const token = await getToken({ req });

//   const isAuth = !!token;

//   const isAuthPage: boolean = authRoutes.some(
//     (route) => {
//       return req.nextUrl.pathname.startsWith(route);
//     }
//   );

//   if(isAuthPage) {
//     if(isAuth) {
//       return NextResponse.redirect(
//         new URL(
//           '/app',
//           req.url,
//         )
//       );
//     }

//     return null;
//   }

//   if(!isAuth) {
//     let from = req.nextUrl.pathname;
//     if(req.nextUrl.search) {
//       from += req.nextUrl.search;
//     }

//     return NextResponse.redirect(
//       new URL(
//         `/sign-in?from=${encodeURIComponent(from)}`,
//         req.url,
//       )
//     );
//   }
// };

// export default withAuth(
//   authMiddleware,
//   {
//     callbacks: {
//       authorized: () => {
//         // This is a work-around for handling redirect on auth pages.
//         // We return true here so that the middleware function above
//         // is always called.
//         return true;
//       },
//     },
//   }
// );

// export const config = {
//   matcher: [
//     '/app',
//     '/sign-in',
//     '/sign-up',
//     '/forgot-password',
//     '/reset-password',
//   ],
// };
