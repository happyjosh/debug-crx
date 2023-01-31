var path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const lessVarToJS = require('less-vars-to-js');
const fs = require('fs');

const themeVars = lessVarToJS(
    fs.readFileSync(path.join(__dirname, './src/common/styles/vars.less'), 'utf8')
);

module.exports = {
  plugins: [new CleanWebpackPlugin()],
  output: {
    path: path.resolve(__dirname, "dist/popup"),
    filename: "bundle.js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json", ".less"],
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
      {
        test: /\.less$/,
        oneOf: [
          {
            test: /\.module\.less$/,
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  modules: {
                    localIdentName: "[local][hash:base64]",
                  },
                  onlyLocals: false,
                },
              },
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    paths: [
                      path.resolve(__dirname, "src"),
                    ],
                  },
                  // javascriptEnabled: true,
                },
              },
            ],
          },
          {
            use: [
              "style-loader",
              {
                loader: "css-loader",
                options: { importLoaders: 1 },
              },
              {
                loader: "less-loader",
                options: {
                  lessOptions: {
                    paths: [path.resolve(__dirname, "src")],
                  },
                  modifyVars: themeVars,
                  javascriptEnabled: true,
                },
              },
            ],
          },
        ],
      },
    ],
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
