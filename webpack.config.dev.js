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
    path.resolve(__dirname, 'src/index.js')
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
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader'},
      {test: /\.tsx?$/, exclude: /node_modules/, loader: 'ts-loader'},
      {test: /\.css$/, loaders: ['style','css']},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader:'url-loader?limit=10000&mimetype=application/font-woff'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'},
      {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader?name=[name].[ext]'},
      {test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream&name=[name].[ext]'}
    ]
  }
};