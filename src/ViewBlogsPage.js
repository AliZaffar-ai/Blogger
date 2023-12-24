
import React, { useEffect, useState } from 'react';
import { database } from './firebase';

function ViewBlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    database.ref('blogs').on('value', (snapshot) => {
      const blogsData = snapshot.val();
      const loadedBlogs = [];
      for (const key in blogsData) {
        loadedBlogs.push({ id: key, ...blogsData[key] });
      }
      setBlogs(loadedBlogs);
    });
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div class= "view" key={blog.id}>
          <h3>{blog.title}</h3>
          <hr></hr>
          <p>{blog.body}</p>
          <hr></hr>
          <p>{blog.dateTime}</p>
        </div>
      ))}
    </div>
  );
}

export default ViewBlogsPage;
