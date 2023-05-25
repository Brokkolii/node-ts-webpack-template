const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: ["public", "dist"],
    port: 9000,
    allowedHosts: "all",
  },
  output: {
    filename: "index.js",
    library: {
      name: "imageEditor",
      type: "umd",
    },
  },
};
