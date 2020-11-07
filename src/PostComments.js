import React from 'react';

const PostComments = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <p>{post.text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default PostComments;
