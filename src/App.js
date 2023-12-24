import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AddBlogPage from './AddBlogPage';
import ViewBlogsPage from './ViewBlogsPage';
import SearchBlogsPage from './SearchBlogsPage';
import Navigation from './Navigation';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <Router>
      <Navigation currentUser={currentUser} />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/add-blog" element={<AddBlogPage />} />
        <Route path="/view-blogs" element={<ViewBlogsPage />} />
        <Route path="/search-blogs" element={<SearchBlogsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
