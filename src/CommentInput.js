import React, { useState } from 'react';

const CommentInput = ({ addComment, id }) => {
  const [text, setText] = useState('');

  const handleCommentChange = (e) => {
    setText(e.target.value);
  };

  const onCommentSubmit = (e) => {
    e.preventDefault();
    addComment(text, id);
    setText('');
  };

  const submitOnKeyDown = (e) => {
    if (e.Keycode === 'Enter') {
      onCommentSubmit();
    }
  };

  return (
    <div>
      <form onSubmit={onCommentSubmit}>
        <input
          type='text'
          value={text}
          onChange={handleCommentChange}
          onKeyDown={submitOnKeyDown}
        />
      </form>
    </div>
  );
};

export default CommentInput;
