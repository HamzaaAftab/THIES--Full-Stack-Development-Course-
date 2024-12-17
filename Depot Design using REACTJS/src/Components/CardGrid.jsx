// components/CardGrid.js
import Card from './Card'; // Import the Card component

const CardGrid = () => {
  // Sample images with prices
  const products = [
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-8.jpg" ', price: 120 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-5-1024x1024.jpg', price: 90 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-2-1024x1024.jpg', price: 150 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg', price: 200 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg', price: 180 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-1-600x728.jpg', price: 75 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-4-600x728.jpg', price: 250 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-7-600x728.jpg', price: 140 },
    { imageUrl: 'https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h1-product-6-600x728.jpg', price: 300 },
  ];

  return (
    <div className="p-8 sm:px-20 gap-x-6">
    
      {/* Responsive Grid for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card 
            key={index} 
            imageUrl={product.imageUrl} 
            altText={`Image ${index + 1}`} 
            price={product.price}  // Passing price
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;


