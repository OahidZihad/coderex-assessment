import React from 'react';

const UserPosts = ({ title, body, index }) => {

  return (
    <li className="mb-4">
        <div className="collapse collapse-plus rounded-lg bg-white shadow-md">
            <input type="checkbox" className="peer" /> 
            <div className="collapse-title text-primary-content peer-checked:bg-primary capitalize font-semibold">
                {index+1}. {title}
            </div>
            <div className="collapse-content text-primary-content"> 
                <p className="text-gray-600">{body}</p>
            </div>
        </div>
    </li>
  );
};

export default UserPosts;