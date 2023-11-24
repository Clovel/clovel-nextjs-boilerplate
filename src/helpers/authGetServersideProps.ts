// import withSession from './session';

// export const getServerSideProps = withSession(async function ({ req, res }) {
//   const { user } = req.session;

//   if(!user) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { user },
//   };
// });
