var path = require('path');
var webpack= require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './app/index.html'),
  filename: 'index.html',
  inject:'body',
});


module.exports = {
  entry: path.resolve(__dirname, './app/main.jsx'),
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin("style.css")],
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.js(x)?$/,
      include: [
        path.resolve(__dirname, './app'),
        path.resolve(__dirname, './reducers'),
        path.resolve(__dirname, './actions'),
        path.resolve(__dirname, '.')
      ],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react']
      } 
    },
    { 
      test: /\.css$/, 
      loader: ExtractTextPlugin.extract(
          {
            fallbackLoader: "style-loader",
            loader: "css-loader"
          })
    } 
    ]
    },
    devServer: {
      hot: true,
      contentBase:'.',
      inline:true,
    }
  };
