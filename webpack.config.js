const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'public/bundle.js',
		path: path.resolve(__dirname, 'build')
	},
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
