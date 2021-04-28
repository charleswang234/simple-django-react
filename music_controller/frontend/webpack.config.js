const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",  // the entry point of our application
  output: {
    path: path.resolve(__dirname, "./static/frontend"), // where to output the static files
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  optimization: {
    minimize: true, // make js smaller
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("production"),
      },
    }),
  ],
};