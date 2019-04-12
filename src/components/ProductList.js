import React, { Component } from "react";

import "../styles/App.css";

import Product from './Product';

class ProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <h1>Product Listing</h1>
                </div>
                <div className="product">
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        );
    }
}

export default ProductList;
