import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(result.data)
      setPosts(result.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div>Blog</div>
      <div className="posts">
        {posts.length > 0 &&
          posts.map((post) => {
            return (
              <div className="post" key={post.id}>
                <h3>
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p>{post.body}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Blog;
