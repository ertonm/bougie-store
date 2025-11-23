import React from 'react';
import '../styles/Footer.scss';

const Footer = ({ onNavigate }) => {
    return (
        <footer className="main-footer">
            <div className="footer-content">
                <div className="footer-brand">
                    <h3>Bougie</h3>
                    <p>Where timeless elegance meets contemporary luxury.</p>
                </div>

                <nav className="footer-nav">
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a>
                    <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('store'); }}>Shop</a>
                </nav>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2025 Bougie. Developed by Erton Mara.</p>
            </div>
        </footer>
    );
};

export default Footer;
