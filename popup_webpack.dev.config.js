var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const baseConfig = require('./popup_webpack.base.config');

module.exports = {
  ...baseConfig,
  mode: "development",
  entry: "./src/popup.tsx",
  plugins: [
      ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Output Management",
      filename: "index.html",
      template: "./public/popupIndex.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, "dist/popup"),
    filename: "bundle.js"
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  devServer: {
    contentBase: "./dist/popup"
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
