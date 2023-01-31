var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const baseConfig = require('./webpack.base.config');

module.exports = {
  ...baseConfig,
  mode: "development",
  entry: "./src/index.tsx",
  plugins: [
      ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html",
      template: "./public/index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    contentBase: "./dist"
  },
  watch: true,
  watchOptions: {
    poll: true,
    ignored: /node_modules/
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};
