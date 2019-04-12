import React from 'react';

const ProductImage = ({ productImageUrl }) => {
    const imageUrl = productImageUrl;
    return (
        <div className="productImage">
            <img
                src = {imageUrl}
                alt = "product image" />
        </div>
    );
}

export default ProductImage;
