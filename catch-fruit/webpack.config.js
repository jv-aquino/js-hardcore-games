const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '.'),
    filename: 'main.js',
  },
  mode: 'development',
};