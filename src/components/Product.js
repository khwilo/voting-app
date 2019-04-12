import React from 'react';

import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import Votes from './Votes';

const Product = ({ product }) => {
    const { title, description, avatarUrl, productImageUrl,  voteCount } = product;
    return (
        <div className="main">
            <ProductImage productImageUrl={productImageUrl} />
            <Votes voteCount={voteCount} />
            <ProductDetails
                avatarUrl   = {avatarUrl}
                title       = {title}
                description = {description}
            />
        </div>
    );
}

export default Product;
