import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/api';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  // add other fields as needed
}

const Dashboard: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetchUsers();
        if (response && response.data && response.data.data) {
          setUsers(response.data.data); // Access nested data property correctly
        } else {
          setError('No users found.');
        }
      } catch (error) {
        setError('Failed to fetch users');
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Dashboard</h1>
      <ul className="bg-white shadow-md rounded-lg p-6">
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id} className="p-2 border-b border-gray-300">
              {user.first_name} {user.last_name}
            </li>
          ))
        ) : (
          <li className="p-2 text-center text-gray-500">No users available.</li>
        )}
      </ul>
    </div>
  );
};

export default Dashboard;
