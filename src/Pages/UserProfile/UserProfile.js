import React from "react";
import { Link, useParams } from "react-router-dom";
import useUser from "../../Hooks/useUser";
import Loader from "../../Utils/Loader";
import UserPosts from "./UserPosts";

const UserProfile = () => {
  const { userId } = useParams();
  const { user, posts, loading } = useUser(userId);

  if (loading) return <Loader />;

  return (
    <div className="container mx-auto my-10">
      <div class="w-full flex justify-center px-4 mb-6">
        <div class="w-full md:w-1/2 bg-white shadow-md rounded-lg p-6 text-center">
          <h2 class="text-3xl font-bold mb-2">{user?.firstName} {user?.lastName}</h2>
          <p class="text-lg font-semibold text-gray-600 mb-2">{user?.email}</p>
          <p class="text-lg font-semibold text-gray-600">{user?.company?.name}</p>
        </div>
      </div>
      <div class="w-full flex justify-center px-4 mt-6">
        <div class="w-full md:w-10/12 p-6">
          <h3 class="text-2xl text-center font-bold mb-4">Posts of {user?.firstName}</h3>
          <ul>
            {
              posts?.posts?.length ?
              posts?.posts?.map((post, index) => {
                console.log(post.length);
                return (
                  <UserPosts title={post?.title} body={post?.body} index={index} />
                )
              })
              :
              (<div className="text-xl text-red-500 text-center">No Post Found</div>)
            }
          </ul>
        </div>
      </div>
      <div className="text-center">
        <Link to="/" className="underline underline-offset-2 text-blue-600">Go Back</Link>
      </div>
    </div>
  );
};
   
export default UserProfile;
