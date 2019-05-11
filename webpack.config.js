const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const DIST_FOLDER = 'dist';

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, DIST_FOLDER),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'url-loader?limit=100000'
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, DIST_FOLDER),
    compress: true,
    port: 9100
  }
};
