// components/Card.js
import { useState } from 'react';

const Card = ({ imageUrl, altText, price }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative mt-8 overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:opacity-80 hover:-translate-y-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img 
        src={imageUrl} 
        alt={altText} 
        className="w-full h-full object-cover"
      /> 
      
      {/* Price text shown on hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 ease-out flex items-center justify-center">
          <span className="text-white text-2xl font-bold">${price}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
