const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const projectPath = "./BOLC_QF_A1_Identity, Climate, and Culture";
const courseName = "BOLC";

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
        extractComments: true,
        terserOptions: {
          mangle: true,
        },
      }),
    ],
  },
  devServer: {
    hot: true,
    compress: true,
    static: {
      directory: path.join(__dirname, `${projectPath}`),
    },
    port: 3000,
  },
  devtool: "source-map",
  target: "es5",
  output: {
    path: path.resolve(__dirname, `${projectPath}/JS`),
    filename: `${courseName}.bundle.js`,
    clean: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
};
