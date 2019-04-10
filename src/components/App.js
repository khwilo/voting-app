import React from "react";

import "../styles/App.css";

import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import Votes from "./Votes";

const App = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Product Listing</h1>
            </div>
            <div className="main">
                <ProductImage />
                <Votes />
                <ProductDetails />
            </div>
        </div>
    )
}

export default App;
