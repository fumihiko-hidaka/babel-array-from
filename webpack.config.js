const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  {
    entry: {
      app: [
        './src/index.js',
      ],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/.*/,
          loader: 'babel-loader',
          query: {
            'presets': [
              '@babel/preset-env'
            ],
            'plugins': [
              [
                '@babel/plugin-transform-runtime',
                {
                  'corejs': 2,
                  'helpers': false,
                  'regenerator': true,
                  'useESModules': true
                }
              ]
            ],
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: `${__dirname}/src/index.html`,
        hash: true,
      }),
    ],
  },
];
