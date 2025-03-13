import React from 'react';
import images from '../assets/img'; 
import './air.css';

const Airwall = () => {
  const titles = ["Amazing Product", "Exclusive Item", "Limited Edition", "Top Seller", "Best Choice"];
const descriptions = [
  "This is a fantastic product that you'll love.",
  "Experience quality and performance like never before.",
  "A premium item made just for you.",
  "Hurry! Only a few left in stock.",
  "Get yours today at an unbeatable price!"
];
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];
  return (
    <div className="container">
      <div className="box">
      {images.map((each, i) => (
          <div key={i} className="image-container">
            <img src={each} alt={`image-${i}`} className="box-img" />
            <h2>{getRandomElement(titles)}</h2>
            <p>{getRandomElement(descriptions)}</p>
            <h3>Price: ${Math.floor(Math.random() * 100) + 1}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Airwall;

