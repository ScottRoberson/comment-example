import React, { useState } from 'react';

const Form = ({ addPost }) => {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(text);
    setText('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' value={text} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
