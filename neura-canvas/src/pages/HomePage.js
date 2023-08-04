import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/HomePage.css';
import imageData from '../data/images.json';

/**
 * Renders the home page of an artistic adventure website.
 * Displays a gallery of selected AI-generated digital art images and provides a call-to-action button to start exploring the catalog.
 * 
 * @returns {JSX.Element} The JSX element representing the home page.
 */
const HomePage = () => {
  const selectedIDs = [9, 87, 5, 19, 10, 22, 84, 67, 85, 23, 34, 30, 29,
   27, 26, 25, 24, 21, 20, 19, 18];
  const imageMap = new Map(imageData.map(image => [image.id, image]));
  const images = selectedIDs.map(id => imageMap.get(id));

  return (
    <div className="home-container">
      <div className="image-container">
        <div className="gallery-container">
          {images.map((image) => (
            <div key={image.id} className="gallery-item">
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
