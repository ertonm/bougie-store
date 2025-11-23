import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    // UI State
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState('home'); // 'home', 'store', or 'about'
    const [selectedFilters, setSelectedFilters] = useState(null); // For passing filters from Header to Store

    // Handlers
    const addToCart = (product) => {
        setCart([...cart, product]);
        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const openProductDetails = (product) => {
        setSelectedProduct(product);
    };

    const closeProductDetails = () => {
        setSelectedProduct(null);
    };

    const navigateTo = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0);
    };

    const handleFilterSelect = (category, subcategory) => {
        setSelectedFilters({ category, subcategory });
    };

    return (
        <div className="app">
            <Header
                cartCount={cart.length}
                onOpenCart={() => setIsCartOpen(true)}
                onNavigate={navigateTo}
                currentPage={currentPage}
                onFilterSelect={handleFilterSelect}
            />

            <Cart
                cartItems={cart}
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                onRemove={removeFromCart}
            />

            <ProductDetails
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={closeProductDetails}
                onAddToCart={addToCart}
            />

            <main>
                {currentPage === 'home' ? (
                    <Home onShopNow={() => navigateTo('store')} />
                ) : currentPage === 'about' ? (
                    <About />
                ) : (
                    <Store
                        onAddToCart={addToCart}
                        onQuickView={openProductDetails}
                        initialFilters={selectedFilters}
                    />
                )}
            </main>

            {currentPage !== 'home' && <Footer onNavigate={navigateTo} />}
        </div>
    );
}

export default App;