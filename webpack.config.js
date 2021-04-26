const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.web.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
           name: 'TestLibrary',
           type: 'umd',
          },
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development"
}