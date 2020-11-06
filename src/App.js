import React, { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      text: 'This is a One',
    },
    {
      id: uuidv4(),
      text: 'This is Two',
    },
  ]);
  const [comments, setComments] = useState([]);

  const addPost = (text) => {
    setPosts([...posts, { id: uuidv4(), text: text }]);
  };

  const addComment = (text, id) => {
    if (id === id) {
      setComments([...comments, { id: uuidv4(), text: text }]);
    }
  };

  return (
    <div className='App'>
      <h1>List</h1>
      <Form addPost={addPost} />
      <Post posts={posts} addComment={addComment} comments={comments} />
    </div>
  );
}

export default App;
