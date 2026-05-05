import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: "Sonic Pro Headphones",
    category: "Audio",
    price: 299,
    rating: 4.8,
    reviews: 124,
    image: "/assets/headphones.png"
  },
  {
    id: 2,
    name: "Titan Smartwatch v2",
    category: "Wearables",
    price: 349,
    rating: 4.7,
    reviews: 89,
    image: "/assets/smartwatch.png"
  },
  {
    id: 3,
    name: "Lumina RGB Keyboard",
    category: "Accessories",
    price: 159,
    rating: 4.9,
    reviews: 256,
    image: "/assets/keyboard.png"
  },
  {
    id: 4,
    name: "Swift Carbon Mouse",
    category: "Accessories",
    price: 89,
    rating: 4.6,
    reviews: 167,
    image: "/assets/mouse.png"
  }
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
