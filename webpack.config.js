const path = require("path")

module.exports = {
  entry: path.resolve(__dirname, "./src/index.web.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: "$",
    libraryTarget: "umd",
    libraryExport: 'default',
    globalObject: 'this',
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
  resolve: {
    ...defaults.resolve,
    alias: {
       ...defaults.resolve.alias,
      react: path.join(__dirname, 'node_modules/react'),
      'react-native': path.join(__dirname, 'node_modules/react-native'),
    }
  },
  mode: "development"
}