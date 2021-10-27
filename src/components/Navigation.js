import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className='nav-container'>
            <Link to={'/see-products'}>See Products</Link>
            <Link to={'/add-product'}>Add Product</Link>
            <Link to={''}>Update Product</Link>
        </div>
    );
};

export default Navigation;