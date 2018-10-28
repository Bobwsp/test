const path = require('path');   //常量const
module.exports = {
  entry: './src/main.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules:[
      {test:/\.css$/,use:['style-loader','css-loader']}
    ]
  }
};