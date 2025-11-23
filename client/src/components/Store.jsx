import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import Loader from './Loader';
import '../styles/Store.scss';

const Store = ({ onAddToCart, onQuickView, initialFilters }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({
        search: '',
        category: '',
        subcategory: '',
        minPrice: '',
        maxPrice: ''
    });

    const categories = {
        "Clothing": ["Dresses", "Tops & Blouses", "T-Shirts", "Knitwear / Sweaters", "Jackets", "Coats", "Skirts", "Pants / Trousers", "Shorts", "Suits / Tailoring", "Jumpsuits", "Outerwear"],
        "Shoes": ["Sneakers", "Sandals", "Heels / Pumps", "Boots", "Ankle Boots", "Loafers", "Ballet Flats", "Espadrilles", "Mules", "Slides"],
        "Watches": ["Quartz Watches", "Automatic Watches", "Luxury / Haute Horlogerie", "Steel Watches", "Gold Watches", "Leather-strap Watches", "Bracelet Watches", "Limited Editions"],
        "Jewelry": ["Fine Jewelry", "High Jewelry", "Necklaces", "Bracelets", "Rings", "Earrings", "Brooches", "Charms", "Cufflinks"],
        "Eyewear": ["Sunglasses", "Optical Glasses", "Oversized Frames", "Square Frames", "Round Frames", "Cat-Eye", "Aviators"],
        "Bags": ["Shoulder Bags", "Top-Handle Bags", "Crossbody Bags", "Tote Bags", "Mini Bags", "Clutches", "Backpacks", "Belt Bags", "Evening Bags", "Wallets & Small Leather Goods"]
    };

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams();
                if (filters.search) params.append('search', filters.search);
                if (filters.category) params.append('category', filters.category);
                if (filters.subcategory) params.append('subcategory', filters.subcategory);
                if (filters.minPrice) params.append('minPrice', filters.minPrice);
                if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);

                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const res = await axios.get(`${apiUrl}/api/products?${params.toString()}`);
                setProducts(res.data);
            } catch (err) {
                console.error("Error fetching products:", err);
            } finally {
                setLoading(false);
            }
        };

        const timeoutId = setTimeout(() => {
            fetchProducts();
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [filters]);

    // Apply initial filters from mega menu navigation
    useEffect(() => {
        if (initialFilters) {
            setFilters(prev => ({
                ...prev,
                category: initialFilters.category || '',
                subcategory: initialFilters.subcategory || ''
            }));
        }
    }, [initialFilters]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters(prev => ({
            ...prev,
            [name]: value,
            ...(name === 'category' ? { subcategory: '' } : {})
        }));
    };

    return (
        <div className="store-container">
            <div className="filters-container">
                <h2>BROWSE</h2>
                <div className="filters">
                    <input
                        type="text"
                        name="search"
                        placeholder="Search products..."
                        value={filters.search}
                        onChange={handleFilterChange}
                    />

                    <select name="category" value={filters.category} onChange={handleFilterChange}>
                        <option value="">All Categories</option>
                        {Object.keys(categories).map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    {filters.category && (
                        <select name="subcategory" value={filters.subcategory} onChange={handleFilterChange}>
                            <option value="">All Subcategories</option>
                            {categories[filters.category].map(sub => (
                                <option key={sub} value={sub}>{sub}</option>
                            ))}
                        </select>
                    )}

                    <input
                        type="number"
                        name="minPrice"
                        placeholder="Min Price"
                        value={filters.minPrice}
                        onChange={handleFilterChange}
                    />
                    <input
                        type="number"
                        name="maxPrice"
                        placeholder="Max Price"
                        value={filters.maxPrice}
                        onChange={handleFilterChange}
                    />
                </div>
            </div>

            {loading ? (
                <Loader />
            ) : (
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            onAddToCart={() => onAddToCart(product)}
                            onQuickView={onQuickView}
                        />
                    ))}
                    {products.length === 0 && <p style={{ textAlign: 'center', width: '100%' }}>No products found.</p>}
                </div>
            )}
        </div>
    );
};

export default Store;
