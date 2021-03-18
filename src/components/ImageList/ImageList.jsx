import './ImageList.css';
import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageList(props) {

  const renderImageCards = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-list">
      {renderImageCards}
    </div>
  );
}
