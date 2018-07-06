const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard =
  new DashboardPlugin();

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const cssPlugin =
  new MiniCssExtractPlugin({
    filename: "styles.css"  
});

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = 
  new HtmlWebpackPlugin ({
    title: 'R_R template DEV',
    filename: 'index.html',
    template: 'src/index.html'
});
  
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cleanPlugin = 
  new CleanWebpackPlugin('lib', {});
 

module.exports = { 
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'bundle.js'
  },
  resolve: { 
    alias: {
      Styles: path.resolve(__dirname, 'src/assets/stylesheets'),
      Images: path.resolve(__dirname, 'src/assets/images')
    }
  },
  module: {
    rules: [ 
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[path][name].[ext]",
              context: "src/assets/images/" 
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          }
        ]
      }
    ]
  },
  plugins: [
    dashboard,
    cleanPlugin,
    cssPlugin,
    htmlPlugin
  ]
};