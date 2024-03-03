// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ProtectedComponent from './ProtectedComponent';

// const RequireAuth = (ProtectedComponent) => {
//   const AuthCheck = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//       const token = localStorage.getItem('accessToken') || getCookie('accessToken');
//       if (!token) {
//         // Redirect to login if token is not present
//         navigate('/login');
//       }
//     }, []);

//     return <ProtectedComponent />;
//   };

//   return AuthCheck;
// };

// export default RequireAuth;
