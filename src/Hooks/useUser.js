import { useState, useEffect } from 'react';
import axios from 'axios';

const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
        axios.all([
            axios.get(`https://dummyjson.com/users/${userId}`),
            axios.get(`https://dummyjson.com/users/${userId}/posts`)
        ])
        .then(axios.spread((userResponse, postsResponse) => {
            setUser(userResponse.data);
            setPosts(postsResponse.data);
            setLoading(false);
        }))
        .catch(error => {
            setError(error);
            setLoading(false);
        });
    }, [userId]);
    
    return { user, posts, loading, error };
};
    
export default useUser;