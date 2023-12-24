import React, { useState, useEffect } from 'react';
import { database, auth } from './firebase';

function AddBlogPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    return () => unsubscribe()
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser) {
      const blogPost = { title, body, dateTime, author: currentUser.uid };
      database.ref('blogs').push(blogPost)
        .then(() => {
          setTitle('');  
          setBody('');  
          setDateTime('');  
          
        })
        .catch(error => {
          console.error("Error adding blog post: ", error);
        });
    } else {
      console.log("User not logged in");
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post Title" />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} placeholder="Post Body" />
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddBlogPage;
