import webpack from 'webpack';
import path from 'path';

export default {
  resolve: {
    extensions: ['.js', 'jsx', '.json', '.ts', '.tsx' ]
  },
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        debug: true,
        noInfo: false,
      }),
      new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader']},
      {test: /\.tsx?$/, exclude: /node_modules/, loader: ['ts-loader']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
};