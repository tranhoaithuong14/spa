import path from 'path';
import { fileURLToPath } from 'url';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.less$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                ],
              },
              sourceMap: true,
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              lessOptions: {
                javascriptEnabled: true,
                modifyVars: {
                  'primary-color': '#1890ff',
                  'link-color': '#1890ff',
                  'success-color': '#52c41a',
                  'warning-color': '#faad14',
                  'error-color': '#f5222d',
                },
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  ['autoprefixer'],
                ],
              },
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    port: 3000,
    hot: true,
    open: true,
    compress: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
    },
    devMiddleware: {
      stats: 'errors-warnings',
    },
    watchFiles: {
      paths: ['src/**/*', 'public/**/*'],
      options: {
        usePolling: false,
      },
    },
  },
  stats: 'errors-warnings',
});