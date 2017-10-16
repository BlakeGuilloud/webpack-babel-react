const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
  dist: path.resolve(__dirname, 'dist'),
  src: path.resolve(__dirname, 'src'),
  js: path.resolve(__dirname, 'src/js'),
};

module.exports = (env = {}) => ({
  devtool: env.activateSourceMaps ? 'cheap-module-eval-source-map' : undefined,
  entry: path.join(paths.js, 'app.js'),
  output: {
    path: paths.dist,
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
