import React from 'react';
import { Navigate } from 'react-router-dom';
const Admin = () => {
  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // if (!isAuthenticated) {
  //   return <Navigate to="/login" />;
  // }
  return (  
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <p>Welcome to the admin panel!</p>
    </div>
  );
};
export default Admin;