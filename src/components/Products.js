import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Users = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const uri = `http://localhost:3000/products`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const deleteUser = (id) => {
        const proceed = window.confirm('Do you really want to delete the products?');
        if (proceed) {
            const uri = `http://localhost:3000/product/${id}`;
            
            fetch(uri, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                })
        }
    };

    return (
        <>
            <h1>All your products</h1>
            <div className='products'>
                {products.map(product => (
                    <div className='product-single' key={product._id}>
                        <h2>{product.productName}</h2>
                        <h4>Quantity: {product.productQuantity}</h4>
                        <h4>Price: {product.productPrice}</h4>
                        <Link to={`/update-product/${product._id}`}>Update Product</Link>
                       <button onClick={() => deleteUser(product._id)}>Delete Product</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Users;