import logo from './logo.svg';
import './App.css';
import axios from './axios';
import { useState, useEffect } from 'react';
import PostCard from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const res = await axios.get('/posts');
      console.log(res.data.posts);
      setPosts(res.data.posts);
    }
    fetchPosts();
  }, []);

  return (
    <div className='container'>
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          userId={post.userId}
          tags={post.tags}
          reactions={post.reactions}
        />
      ))}
    </div>
  );
}

export default App;
