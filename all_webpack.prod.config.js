var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./all_webpack.base.config');

module.exports = {
  ...baseConfig,
  mode: 'production',
  entry: {
    popup: './src/popup.tsx',
    crx: './src/crx.tsx',
    background: './src/background.tsx',
  },
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: 'Output Management',
      filename: 'popup.html',
      template: './public/popup.html',
      chunks: ['popup'],
    }),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: "bundle.js",
    filename: '[name].js',
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
