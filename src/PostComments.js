import React from 'react';

const PostComments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <p>{comment.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostComments;
