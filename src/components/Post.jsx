import React from 'react';

const Post = ({id, title, completed}) => {
  return (
    <>
        <p>{id}</p>
        <h2>{title}</h2>
        <p>{completed}</p>
  </>
  )
}

export default Post;