// import React from 'react';
// import { Link } from 'react-router-dom';

// const NavBar = () => {
//   return (
//     <nav>
//       <Link to="/signin">Sign In</Link>
//       <Link to="/signup">Sign Up</Link>
//       <Link to="/dashboard">Dashboard</Link>
//     </nav>
//   );
// };

// export default NavBar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? 'text-white bg-blue-700 px-3 py-2 rounded-md text-sm font-medium'
      : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium';
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/signin" className={getLinkClass('/signin')}>
            Sign In
          </Link>
          <Link to="/signup" className={getLinkClass('/signup')}>
            Sign Up
          </Link>
          <Link to="/dashboard" className={getLinkClass('/dashboard')}>
            Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
