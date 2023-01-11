import logo from './logo.svg';
import './App.css';
import axios from './axios';
import { useState, useEffect } from 'react';
import PostCard from './components/PostCard';

function App() {
  const [posts, setPosts] = useState([]);
  // const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let [page, setPageNum] = useState();
  useEffect(() => {
    async function fetchPosts() {
      // const res = await axios.get(`https://dummyjson.com/posts?limit=10&skip=${pages - 10}`);
      const res = await axios.get(`https://dummyjson.com/posts`);

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
      {/* <div
        className='page-number'
        onClick={() => setPageNum(page * 10)}
      >
        <p>{page}</p>
      </div> */}
    </div>
  );
}

export default App;
