var webpack = require("webpack");
module.exports = {
  entry: './src/index.ts',
  output: {
    filename: './index.js'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.vue', '.pug', '.html', '.css'],
    alias: {
      'vue': 'vue/dist/vue.esm.js'
    },
    modules: [
      'node_modules',
    ]
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.pug$/,
        loader: ['raw-loader', 'pug-html-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.css/,
        loaders: ['style-loader', 'css-loader']
      },
    ]
  },
  // // そんなにいらん
  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'Vue',
  //     filename: 'vue.js',
  //     minChunk: Infinity,
  //   })
  // ]
}