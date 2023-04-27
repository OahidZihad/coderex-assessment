import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import Loader from '../../Utils/Loader';
import UserRow from './UserRow';

const UserList = () => {
  const navigate = useNavigate()
  const { users, loading } = useUsers();

  const handleUser = (id) =>{
    navigate(`/users/${id}`)
  }

  if (loading) return <Loader />;

  return (
    <div className='container mx-auto my-10'>
      <h1 className='font-bold text-center text-3xl mb-5'>All Users List</h1>
      <div className="overflow-x-auto">
        <table className="table w-10/12 mx-auto">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users?.users.map((user, index) => (
              <UserRow user={user} index={index} handleUser={handleUser} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;