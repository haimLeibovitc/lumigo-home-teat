const PATH = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const resolve = require('./utils/resolve');

const PUBLIC_PATH = '/';
const ROOT = PATH.resolve(__dirname, './');
const { PORT = '/' } = process.env;

const PATHS = resolve(
  {
    SRC: 'src',
    DEST: 'dist',
    NODE_MODULES: 'node_modules/'
  },
  ROOT
);

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: PATHS.DEST,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [PATHS.SRC],
        exclude: [PATHS.NODE_MODULES],
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              disable: true // webpack@2.x and newer
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  devServer: {
    overlay: true,
    stats: {
      modules: false,
      errorDetails: true,
      timings: false,
      cached: false,
      colors: true
    },
    index: 'index.html',
    historyApiFallback: true,
    port: PORT || 5000,
    contentBase: PATHS.DEST,
    publicPath: PUBLIC_PATH,
    watchContentBase: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
