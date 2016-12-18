var path = require('path');
var webpack= require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './app/index.html'),
  filename: 'index.html',
  inject:'body'
});


module.exports = {
  entry: path.resolve(__dirname, './app/main.jsx'),
  output: {
    path: 'dist',
    filename: 'index_bundle.js'
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.js(x)?$/,
      include: [
        path.resolve(__dirname, './app'),
        path.resolve(__dirname, './reducers'),
        path.resolve(__dirname, './actions')
      ],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react']
      } 
    }
    ]
  },
  devServer: {
    hot: true,
    contentBase:'./dist',
    inline:true,
  }
};
