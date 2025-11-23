import React from 'react';
import '../styles/Loader.scss';

const Loader = () => {
    return (
        <div className="loader-container">
            <div className="spinner"></div>
            <p>Curating Luxury...</p>
        </div>
    );
};

export default Loader;
