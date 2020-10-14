const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject:'head',
      //   minify: isProduction && {
      //     collapseWhitespace: true,
      //     removeComments: true,
      //     minifyJS: true,
      //   },
      // inlineSource: isProduction && '\.(js|css)$'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devServer: {
    overlay: true,
    useLocalIp:true,
    stats: 'minimal',
    host: '0.0.0.0',
    https:true,
    port: 9000,
  },
};
