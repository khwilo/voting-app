import React from 'react';

const ProductImage = () => {
    const imageUrl = "https://picsum.photos/150/150/?random";
    return (
        <div className="productImage">
            <img
                src = {imageUrl}
                alt = "product image" />
        </div>
    );
}

export default ProductImage;
