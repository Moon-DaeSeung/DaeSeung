'use strict';
var path = require('path');

module.exports = {
  entry: [
    './index'
  ],
  output: {
    path: './static/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js'],
    root: [
      path.join(__dirname, 'src'),
    ]
  },
  module: {
    loaders: [
		{
			test: /\.js$/,
			// exclude: /node_modules/,
			loaders: ['babel-loader'],
		},
		{
			test: /\.css$/,
			loader: "style-loader!css-loader",
		},
		{ 
			test: /\.(png|woff|woff2|eot|ttf|svg)$/,
			loader: "url-loader?limit=100000"
		},
		{
			test: /\.jpg$/,
			loader: "file-loader"
		}
    ]
  }
};
