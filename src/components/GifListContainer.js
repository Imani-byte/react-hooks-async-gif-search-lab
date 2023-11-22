import React, { useState, useEffect } from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';
import './GifListContainer.css'

const GifListContainer = () => {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    try {
      const apiKey = '5noXJkB9Ky37ZQUsqWPopOQn8qNrPRIy';
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=3&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      const data = await response.json();
      setGifs(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className='container'>
        <div className='gif-search'>
            <GifSearch handleSearch={handleSearch} />
        </div>
        <div className='gif-list'>
            <GifList gifs={gifs} />
        </div>
    </div>
  );
};

export default GifListContainer;

