import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (text) => {
    setPosts([...posts, { id: uuidv4(), text, comments: [] }]);
  };

  const addComment = (text, postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [...post.comments, { id: uuidv4(), text }]
          }
        }
        return post;
      })
    );
  };
  console.log(posts);
  return (
    <div className='App'>
      <h1>List</h1>
      <Form addPost={addPost} />
      <Post posts={posts} addComment={addComment} />
    </div>
  );
}

export default App;
