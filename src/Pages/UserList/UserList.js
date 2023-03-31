import React from 'react';
import { Link } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';

const UserList = () => {
  const { users, loading, error } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.users.map(user => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.firstName} {user.lastName} - {user.email} - {user.company.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;