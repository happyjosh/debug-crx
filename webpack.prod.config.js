var path = require("path");

const baseConfig = require('./webpack.base.config');

module.exports = {
  ...baseConfig,
  mode: "production",
  entry: "./src/crx.tsx",
  plugins: [
    ...baseConfig.plugins,
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
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
