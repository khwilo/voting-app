import React from 'react';

import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import Votes from './Votes';

const Product = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Product Listing</h1>
            </div>
            <div className="main">
                <ProductImage />
                <Votes />
                <ProductDetails />
            </div>
        </div>
    );
}

export default Product;
