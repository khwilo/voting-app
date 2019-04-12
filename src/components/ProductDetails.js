import React from 'react';
import Avatar from './Avatar';

const ProductDetails = ({ avatarUrl, title, description }) => {
    return (
        <div className="productDetailsContainer">
            <div className="productTitle">
                <p>{title}</p>
            </div>
            <div className="productDescription">
                <p>{description}</p>
            </div>
            <Avatar avatarUrl={avatarUrl} />
        </div>
    );
}

export default ProductDetails;
