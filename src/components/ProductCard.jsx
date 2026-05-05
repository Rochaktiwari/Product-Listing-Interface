import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} className="product-image" />
      </div>
      <div className="card-content">
        <div className="category">{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        <div className="rating">
          {"★".repeat(Math.floor(product.rating))}
          <span style={{ color: 'var(--text-secondary)', marginLeft: '4px' }}>
            ({product.reviews})
          </span>
        </div>
        <div className="price-row">
          <span className="price">${product.price}</span>
          <button className="add-btn">
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
