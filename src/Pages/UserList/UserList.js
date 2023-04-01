import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../../Hooks/useUsers';
import Loader from '../../Utils/Loader';

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
        <table className="table w-full">
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
              <tr className='hover cursor-pointer' onClick={()=>handleUser(user?.id)}>
                <th>{index + 1}</th>
                <td>{user?.firstName} {user?.lastName}</td>
                <td>{user?.email}</td>
                <td>{user?.company?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;