const path = require('path');
const pkg = require('./package.json');
module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "main.js",
      library: pkg.name,
      libraryTarget: "commonjs2"
    },
    resolve: {
        alias: {
          'react-native': 'react-native-web'
        },
        // Resolve to iOS-specific components
        extensions: ['.ios.js', '.android.js', '.js', '.json']
      },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(png|jpg|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        }
      ]
    }
};