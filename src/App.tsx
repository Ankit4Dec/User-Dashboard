// import React from 'react';
// import './index.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import Dashboard from './pages/Dashboard';
// import PrivateRoute from './components/PrivateRoute';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signin" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
//         <Route path="/" element={<SignIn />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;




import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white py-4">
          <div className="container mx-auto">
            <h1 className="text-3xl">User Management Dashboard</h1>
            <NavBar/>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
            <Route path="/" element={<SignIn />} />
          </Routes>
        </main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            &copy; 2024 User Management Dashboard
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
