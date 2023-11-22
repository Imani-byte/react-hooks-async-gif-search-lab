import React, { useState } from 'react';
import './GifListContainer.css'

const GifSearch = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Enter Search Term:
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
     
      <button type="submit">Find Gifs</button>
    </form>
  );
};

export default GifSearch;
