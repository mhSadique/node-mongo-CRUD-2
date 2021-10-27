import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './UpdateProduct.css';

const UpdateUser = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const {productName, productPrice, productQuantity} = product;
    const updatedProduct = {productName, productPrice, productQuantity};

    useEffect(() => {
        const uri = `http://localhost:3000/product/${id}`;

        fetch(uri)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id])


    const handleUpdateProduct = e => {
        const uri = `http://localhost:3000/update-product/${id}`;
        fetch(uri, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount === 1) {
                alert('Your product has successfully been updated.')
            }
        })

        e.preventDefault();
    };

    const handleProductNameChange = e => {
        const newProductName = e.target.value;
        const newProductInfo = {...product, productName: newProductName};
        setProduct(newProductInfo);
    };

    const handleProductPriceChange = e => {
        const newProductPrice = e.target.value;
        const newProductInfo = {...product, productPrice: newProductPrice};
        setProduct(newProductInfo);
    };

    const handleProductQuantityChange = e => {
        const newProductQuantity = e.target.value;
        const newProductInfo = {...product, productQuantity: newProductQuantity};
        setProduct(newProductInfo);
    };

    return (
        <div>
            <h1>Update Product Here</h1>
            <form onSubmit={handleUpdateProduct}>
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

export default UpdateUser;