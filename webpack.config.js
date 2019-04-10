const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry : "./src/index.js",
    output: {
        path      : path.resolve(__dirname, "/build"),
        publicPath: "/",
        filename  : "bundle.js"
    },
    devServer: {
        contentBase: "./build"
    }
}
