import React, { Component } from "react";

import "../styles/App.css";

import data from "../data";

import Product from './Product';

class ProductList extends Component {
    state = {
        products: data
    };

    handleUpVote = product => {
        const products = [...this.state.products];
        const index    = products.indexOf(product);
        products[index].voteCount++;
        this.setState({ products: products });
    }

    render() {
        const products          = this.state.products.sort((a, b) => (
            b.voteCount - a.voteCount
        ));

        const productComponents = products.map((product) => (
            <Product
                key      = {'product-' + product.id}
                product  = {product}
                onUpVote = {this.handleUpVote}
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
