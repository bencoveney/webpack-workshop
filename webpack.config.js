const path = require('path');

const GoodJobPlugin = require('./custom-webpack/good-job-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: 'text-loader'
      }
    ]
  },
  resolveLoader: {
    modules: ["node_modules", "custom-webpack"]
  },
  plugins: [
    new GoodJobPlugin()
  ]
};