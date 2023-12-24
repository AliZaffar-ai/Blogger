
import React, { useState } from 'react';
import { database } from './firebase';

function SearchBlogsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    database.ref('blogs').orderByChild('title').equalTo(searchTerm).on('value', (snapshot) => {
      const results = [];
      snapshot.forEach((childSnapshot) => {
        results.push(childSnapshot.val());
      });
      setSearchResults(results);
    });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search blogs" />
        <button type="submit">Search</button>
      </form>
      {searchResults.map((result, index) => (
        <div id = "search" key={index}>
          <h3>{result.title}</h3>
          <hr></hr>
          <p>{result.body}</p>
          <hr></hr>
          <p>{result.dateTime}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchBlogsPage;
