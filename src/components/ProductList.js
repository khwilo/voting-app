import React, { Component } from "react";

import "../styles/App.css";

import data from "../data";

import Product from './Product';

class ProductList extends Component {
    render() {
        const product = data[0];

        return (
            <div className="container">
                <div className="header">
                    <h1>Product Listing</h1>
                </div>
                <div className="product">
                    <Product product={product} />
                </div>
            </div>
        );
    }
}

export default ProductList;
