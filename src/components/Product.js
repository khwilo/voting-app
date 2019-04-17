import React, { Component } from 'react';

import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import Votes from './Votes';

class Product extends Component {
    render() {
        const { product, onVote }                                            = this.props;
        const { title, description, avatarUrl, productImageUrl,  voteCount } = product;

        return (
            <div className="main">
                <ProductImage productImageUrl={productImageUrl} />
                <Votes
                    voteCount = {voteCount}
                    onVote    = {onVote}
                    product   = {product}
                />
                <ProductDetails
                    avatarUrl   = {avatarUrl}
                    title       = {title}
                    description = {description}
                />
            </div>
        );
    }
}

export default Product;
