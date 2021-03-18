import './App.css';
import React from 'react';
import unsplash from '../../api/unsplash';

import ImageList from '../ImageList/ImageList';
import SearchBar from '../SearchBar/SearchBar';

export default function App() {
  const [images, setImages] = React.useState([]);

  // You can make an anonymous function an async function
  const onSearchSubmit = async (term) => {

    // Await the get request to run the rest of the function
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    setImages(response.data.results);
  }

  return (
    <div className="App">
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={onSearchSubmit} />
        <ImageList images={images} />
      </div>
    </div>
  );
}
