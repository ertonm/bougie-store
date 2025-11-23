import React from 'react';
import '../styles/ProductDetails.scss';

const ProductDetails = ({ product, isOpen, onClose, onAddToCart }) => {
    if (!isOpen || !product) return null;

    return (
        <div className="product-details-overlay" onClick={onClose}>
            <div className="product-details-modal" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="modal-content">
                    <div className="image-section">
                        <img src={product.image} alt={product.title} />
                    </div>

                    <div className="info-section">
                        <span className="category">{product.category}</span>
                        <h2>{product.title}</h2>
                        <p className="description">{product.description || "No description available."}</p>

                        <div className="price-action">
                            <span className="price">${product.price}</span>
                            <button className="add-to-cart-btn" onClick={() => {
                                onAddToCart(product);
                                onClose();
                            }}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
