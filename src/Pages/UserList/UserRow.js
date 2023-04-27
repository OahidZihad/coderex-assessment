import React from 'react';

const UserRow = ({user, index, handleUser}) => {
    return (
        <tr className='hover cursor-pointer' onClick={()=>handleUser(user?.id)}>
            <th>{index + 1}</th>
            <td>{user?.firstName} {user?.lastName}</td>
            <td>{user?.email}</td>
            <td>{user?.company?.name}</td>
        </tr>
    );
};

export default UserRow;