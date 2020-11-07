import React from 'react';
import CommentInput from './CommentInput';
import PostComments from './PostComments';
const Post = ({ posts, addComment }) => {
  const postList = posts.map((post) => {
    return (
      <div key={post.id}>
        <p>{post.text}</p>
        <CommentInput addComment={addComment} id={post.id} />
        <PostComments comments={post.comments} />
      </div>
    );
  });
  return <div>{postList}</div>;
};

export default Post;
