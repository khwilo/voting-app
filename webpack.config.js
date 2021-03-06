const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack           = require("webpack");

module.exports = {
    entry : "./src/index.js",
    output: {
        path      : path.resolve(__dirname, "build"),
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
            },
            {
                test: /\.css$/,
                use : ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve("./public/index.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
