const path = require("path");
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");

const projectPath = "./WQP_L1_Gold_v4";

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
    contentBase: path.join(__dirname, `${projectPath}`),
    port: 3000,
    open: "Edge",
  },
  devtool: "source-map",
  target: "es5",
  output: {
    path: path.resolve(__dirname, `./public/`),
    filename: "[name].bundle.js",
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
