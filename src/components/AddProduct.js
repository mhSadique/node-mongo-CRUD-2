import React, { useState } from 'react';
import './AddProduct.css';

const AddUser = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQuantity, setProductQuantity] = useState('');

    const handleAddProduct = e => {
        const updatedProductInfo = { productName, productPrice, productQuantity };
        // console.log(updatedProductInfo);
        const uri = `http://localhost:3000/add-product`;
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProductInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setProductName('');
                    setProductPrice('');
                    setProductQuantity('');
                    alert('Product stored in database successfully')
                }
            })

        e.preventDefault();
    };

    const handleProductNameChange = e => {
        const updatedName = e.target.value;
        setProductName(updatedName);
    };

    const handleProductPriceChange = e => {
        const updatedPrice = +e.target.value;
        setProductPrice(updatedPrice)
    };


    const handleProductQuantityChange = e => {
        const updatedQuantity = +e.target.value;
        setProductQuantity(updatedQuantity)
    };


    return (
        <div>
            <h1>Add new user here</h1>
            <form onSubmit={handleAddProduct}>
                <label htmlFor="name">Product Name: </label>
                <input
                    type="text"
                    id='name'
                    value={productName}
                    onChange={handleProductNameChange} /> <br />

                <label htmlFor="price">Product Price: </label>
                <input
                    type="number"
                    id="price"
                    value={productPrice}
                    onChange={handleProductPriceChange} /> <br />

                <label htmlFor="quantity">Product Quantity: </label>
                <input
                    type="number"
                    id="quantity"
                    value={productQuantity}
                    onChange={handleProductQuantityChange} /> <br />

                <input
                    type="submit"
                    value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;