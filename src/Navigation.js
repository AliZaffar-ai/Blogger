import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const history = useNavigate();

    const handleLogout = async () => {
        try {
            await auth.signOut();
            history('/login');
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setIsLoggedIn(!!user);
    });

    
    return () => unsubscribe();
  }, []);

  return (
    <nav>
      {isLoggedIn ? (
        <>
          <Link to="/add-blog">Add Blog Post</Link>
          <Link to="/view-blogs">View Blog Posts</Link>
          <Link to="/search-blogs">Search Blog Posts</Link>
          <button class="logout" onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}

export default Navigation;
