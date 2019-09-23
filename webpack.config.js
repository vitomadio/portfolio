var path = require('path');

module.exports = {
  entry: {
    app: './src/index.js',
    animation: './src/animation.js',
    particles: './src/particles.js',
    sliders: './src/sliders.js'
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: ["@babel/preset-env"]
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].bundle.js'
  }
}