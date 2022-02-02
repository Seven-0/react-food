// import React from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { useSelector } from "react-redux";

// function ProtectedRoute({ component: Component, ...restOfProps }) {
//   // const isAuthenticated = localStorage.getItem('isLogin');
//   const isAuthenticated  = useSelector((state) => state.reducerLogin.isLogin);
//   console.log('login', isAuthenticated);

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
//       }
//     />
//   );
// }

// export default ProtectedRoute;


import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.reducerLogin.isLogin);
  return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;