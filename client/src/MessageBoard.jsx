import { useState, useEffect } from "react";

import "./MessageBoard.css";
import'./App.css'

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    try {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setLoading(false);
    }
  }

  async function handleDeletePost(postId) {
    try {
      await fetch(`https://databaseproject-e53f.onrender.com${postId}`, {
        method: 'DELETE'
      });
      getPosts();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  }

  return (
    <div className="app-container">
      
      <div className="posts-container">
        {loading ? (
          <p>Loading...</p>
        ) : posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <div className="post" key={post.posts_id}>
              <h2 className="post-title">{post.posts_title}</h2>
              <div className="post-details">
                <span className="post-platforms">{post.platforms}: </span>
                <span className="post-tags">{post.tags} </span>
              </div>
              <p className="post-content">{post.posts_content}</p>
              <div className="post-footer">
                <span className="post-author">By {post.posts_name}</span>
                <button className="delete-button" onClick={() => handleDeletePost(post.posts_id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
