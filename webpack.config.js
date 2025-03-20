const path = require('path');

module.exports = {
  entry: './src/main.js', // Шлях до вашого основного файлу
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js', // Використовуйте повну версію Vue для підтримки шаблонів
    },
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [new (require('vue-loader').VueLoaderPlugin)()],
};
