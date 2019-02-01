/*

# webpack config

https://webpack.js.org
https://webpack.js.org/configuration

*/

const path = require("path");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
const env = process.env.NODE_ENV;
const prd = env === "production";
const dev = env === "development";

//
// ⚠️ customize the paths
//
const entryPath = path.join(__dirname, "src", "index.js");
const outputPath = path.join(__dirname, "dist");

const opts = {
  target: "web",
  mode: env,
  entry: entryPath,
  output: {
    path: outputPath,
    filename: "index.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: { presets: ["@babel/preset-env"] }
      }
    ]
  },
  watch: false,
  cache: dev,
  performance: {
    hints: false
  },
  stats: {
    assets: false,
    colors: dev,
    errors: true,
    errorDetails: true,
    hash: false
  }
};

if (dev === true) {
  opts.devtool = "source-map";
}

if (prd === true) {
  opts.optimization = {
    minimize: true,
    minimizer: [
      new UglifyjsWebpackPlugin({
        sourceMap: false,
        uglifyOptions: {
          ecma: 5,
          mangle: true,
          compress: true,
          warnings: false
        }
      })
    ]
  };
}

module.exports = opts;
