import { Link } from "react-router-dom";
import Post from '../components/Post';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function Posts () {

const [posts, setPosts] = useState([]);

useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((res) => setPosts(res.data))
}, [])

    return (
        <main>
      <h1>Posts:</h1>
      {posts.map(post => <Post key={post.id} {...post}/> )}
      </main>
    );
}

export default Posts;



