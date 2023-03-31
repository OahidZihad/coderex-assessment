import React from "react";
import { useParams } from "react-router-dom";
import useUser from "../../Hooks/useUser";

const UserProfile = () => {
  const { userId } = useParams();
  // console.log("user Id", userId);
  const { user, posts, loading, error } = useUser(userId);
  console.log(posts);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>
        {user?.firstName} {user?.lastName}
      </h1>
      <p>Email: {user?.email}</p>
      <p>Company: {user?.company?.name}</p>
      <h2>Posts</h2>
      <ul>
        {posts?.posts?.map((post) => (
          <li key={post?.id}>
            <h3>{post?.title}</h3>
            <p>{post?.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
   
export default UserProfile;
