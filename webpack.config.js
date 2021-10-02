/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DEVELOPMENT = 'development'
const PRODUCTION = 'production'

const mode = process.env.NODE_ENV || DEVELOPMENT

const config = {
  context: path.resolve(__dirname, '.'),

  entry: {
    main: ['core-js', './src/main/config/index.tsx']
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },

  devtool: 'source-map',

  devServer: {
    static: path.resolve('./dist'),
    hot: true,
    port: 9000
  },

  resolve: {
    modules: [
      path.resolve(__dirname, './src'),
      path.resolve(__dirname, './node_modules')
    ],
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      react: require.resolve('react')
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, './tsconfig.json')
      })
    ]
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        // include: path.resolve('src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          process.env.NODE_ENV === PRODUCTION
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]?[hash]'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        type: 'asset/inline'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },

  plugins: [
    new webpack.SourceMapDevToolPlugin({}),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      minify:
        mode === PRODUCTION
          ? {
              collapseWhitespace: true,
              removeComments: true
            }
          : false
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new MiniCssExtractPlugin()
  ]
}

module.exports = config
