import React, { useState } from 'react';
import '../styles/Header.scss';

const CATEGORIES = {
    'Clothing': ['Dresses', 'Tops & Blouses', 'T-Shirts', 'Knitwear / Sweaters', 'Jackets', 'Coats', 'Skirts', 'Pants / Trousers', 'Shorts', 'Suits / Tailoring', 'Jumpsuits', 'Outerwear'],
    'Shoes': ['Sneakers', 'Sandals', 'Heels / Pumps', 'Boots', 'Ankle Boots', 'Loafers', 'Ballet Flats', 'Espadrilles', 'Mules', 'Slides'],
    'Watches': ['Quartz Watches', 'Automatic Watches', 'Luxury / Haute Horlogerie', 'Steel Watches', 'Gold Watches', 'Leather-strap Watches', 'Bracelet Watches', 'Limited Editions'],
    'Jewelry': ['Fine Jewelry', 'High Jewelry', 'Necklaces', 'Bracelets', 'Rings', 'Earrings', 'Brooches', 'Charms', 'Cufflinks'],
    'Eyewear': ['Sunglasses', 'Optical Glasses', 'Oversized Frames', 'Square Frames', 'Round Frames', 'Cat-Eye', 'Aviators'],
    'Bags': ['Shoulder Bags', 'Top-Handle Bags', 'Crossbody Bags', 'Tote Bags', 'Mini Bags', 'Clutches', 'Backpacks', 'Belt Bags', 'Evening Bags', 'Wallets & Small Leather Goods']
};

const Header = ({ cartCount, onOpenCart, onNavigate, currentPage, onFilterSelect }) => {
    const [showMegaMenu, setShowMegaMenu] = useState(false);

    const handleSubcategoryClick = (category, subcategory) => {
        setShowMegaMenu(false);
        onNavigate('store');
        // Small delay to ensure Store component is mounted before applying filters
        setTimeout(() => {
            if (onFilterSelect) {
                onFilterSelect(category, subcategory);
            }
        }, 100);
    };

    return (
        <header className="main-header" onMouseLeave={() => setShowMegaMenu(false)}>
            <div className="logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
                <h1>Bougie</h1>
            </div>

            <nav>
                <ul>
                    <li><a href="#" className={currentPage === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Home</a></li>
                    <li>
                        <a
                            href="#"
                            className={currentPage === 'store' ? 'active' : ''}
                            onClick={(e) => { e.preventDefault(); onNavigate('store'); }}
                            onMouseEnter={() => setShowMegaMenu(true)}
                        >
                            Shop
                        </a>
                    </li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>About</a></li>
                </ul>
            </nav>

            <div className="actions">
                <button className="cart-toggle" onClick={onOpenCart}>
                    Bag ({cartCount})
                </button>
            </div>

            {showMegaMenu && (
                <div className="mega-menu" onMouseEnter={() => setShowMegaMenu(true)} onMouseLeave={() => setShowMegaMenu(false)}>
                    <div className="mega-menu-content">
                        {Object.keys(CATEGORIES).map(category => (
                            <div key={category} className="category-column">
                                <h3>{category}</h3>
                                <ul>
                                    {CATEGORIES[category].map(sub => (
                                        <li key={sub}>
                                            <a
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSubcategoryClick(category, sub);
                                                }}
                                            >
                                                {sub}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
