import { useState, useRef, useEffect } from 'react';

export default function ImageCard(props) {
  const { urls, description } = props.image;
  const imageRef = useRef();
  const [spans, setSpans] = useState(0);

  useEffect(() => {
    // Because we can't access the current object we have to wait for the images to load
    imageRef.current.addEventListener('load', calcSpans);
  }, []);

  const calcSpans = () => {
    const imageHeight = imageRef.current.clientHeight;
    const currentSpans = Math.ceil(imageHeight / 10);

    console.log(currentSpans);
    setSpans(currentSpans);
  }

  return (
    <div className="image-card" style={{ gridRowEnd: `span ${spans}` }}>
      <img
        src={urls.regular}
        alt={description}
        ref={imageRef}
      />
    </div>
  );
}
