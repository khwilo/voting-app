import React, { Component } from "react";

import "../styles/App.css";

import data from "../data";

import Product from './Product';

class ProductList extends Component {
    render() {
        const productComponents = data.map((product) => (
            <Product
                key     = {'product-' + product.id}
                product = {product}
            />
        ));

        return (
            <div className="container">
                <div className="header">
                    <h1>Product Listing</h1>
                </div>
                <div className="product">
                    {productComponents}
                </div>
            </div>
        );
    }
}

export default ProductList;
