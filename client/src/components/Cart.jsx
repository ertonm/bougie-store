import React from 'react';
import '../styles/Cart.scss';

const Cart = ({ cartItems, isOpen, onClose, onRemove }) => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
            <div className="cart-header">
                <h2>Your Bag ({cartItems.length})</h2>
                <button className="close-btn" onClick={onClose}>&times;</button>
            </div>

            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p className="empty-msg">Your bag is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img src={item.image} alt={item.title} />
                            <div className="item-info">
                                <h4>{item.title}</h4>
                                <span className="price">${item.price}</span>
                                <button className="remove-btn" onClick={() => onRemove(index)}>Remove</button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <div className="cart-footer">
                <div className="total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;
