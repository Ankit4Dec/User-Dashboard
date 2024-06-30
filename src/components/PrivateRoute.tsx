import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component }) => {
  const isAuthenticated = !!localStorage.getItem('user');
  const location = useLocation();

  return isAuthenticated ? (
    <Component />
  ) : (
    <Navigate to="/signin" state={{ from: location }} />
  );
};

export default PrivateRoute;
