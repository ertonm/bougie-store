import React from 'react';
import '../styles/ProductCard.scss';

const ProductCard = ({ product, onAddToCart, onQuickView }) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <img src={product.image} alt={product.title} />
                <div className="overlay">
                    <button className="quick-view-btn" onClick={() => onQuickView(product)}>Quick View</button>
                </div>
            </div>
            <div className="info">
                <h3>{product.title}</h3>
                <p className="category">{product.category}</p>
                <div className="bottom">
                    <span className="price">${product.price}</span>
                    <button className="add-to-cart-btn" onClick={onAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;