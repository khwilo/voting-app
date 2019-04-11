import React from 'react';
import Avatar from './Avatar';

const ProductDetails = () => {
    return (
        <div className="productDetailsContainer">
            <div className="productTitle">
                <p>Product Title</p>
            </div>
            <div className="productDescription">
                <p>Body of product description</p>
            </div>
            <Avatar />
        </div>
    );
}

export default ProductDetails;
