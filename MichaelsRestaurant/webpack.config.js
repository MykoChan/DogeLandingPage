const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    devServer: {
        static: "./dist",
    },
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
};

// const HtmlWebpackPlugin = require("html-webpack-plugin");
// module.exports = {
//     mode: "development",
//     entry: {
//         index: "./src/index.js",
//     },
//     devtool: "inline-source-map",
//     devServer: {
//         static: "./dist",
//     },
//     output: {
//         filename: "[name].bundle.js",
//         path: path.resolve(__dirname, "dist"),
//         clean: true,
//         publicPath: "/",
//     },
//     optimization: {
//         runtimeChunk: "single",
//     },
// };
