import Post from '../components/Post';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Posts () {

const [posts, setPosts] = useState([]);

useEffect(() => {
    axios
    .get('http://localhost:3001/notes')
    // .get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => setPosts(res.data))
}, [])

    return (
        <main>
      <h1>Posts from the db.json</h1>
      <div className='posts'>
      {posts.map(post => <Post key={post.id} {...post}/>)}
      </div>
      </main>
    );
}

export default Posts;



