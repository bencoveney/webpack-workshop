import path from 'path';
import GoodJobPlugin from './custom-webpack/good-job-plugin';
import webpack = require('webpack');

const config: webpack.Configuration = {
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
    modules: ["node_modules", "custom-webpack"],
    extensions: [".ts", ".js"]
  },
  plugins: [
    new GoodJobPlugin()
  ]
};

export default config;
