import React from 'react';

import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import Votes from './Votes';

const Product = () => {
    return (
        <div className="main">
            <ProductImage />
            <Votes />
            <ProductDetails />
        </div>
    );
}

export default Product;
