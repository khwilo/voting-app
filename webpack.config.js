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
    },
    module: {
        rules: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                use    : "babel-loader"
            }
        ]
    }
}
