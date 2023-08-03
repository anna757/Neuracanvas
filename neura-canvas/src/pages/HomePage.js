import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/HomePage.css';
import imageData from '../data/images.json';

const HomePage = () => {
  const selectedIDs = [9, 5, 10, 19, 85, 22, 84, 87, 67];
  const images = imageData.filter(image => selectedIDs.includes(image.id));

  return (
    <div className="home-container">
      <div className="image-container">
        <div className="gallery-container">
          {images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <div className="header-section">
          <h1 className="header-title">Embark on an Artistic Adventure</h1>
          <p>Explore uncharted territories of creativity with our AI-generated masterpieces.</p>
          <Link to="/catalog" className="header-button">Start Exploring</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
