const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.ts',
  target: 'node',
  mode: 'none',
  resolve: {
    mainFields: ['module', 'main'],
    extensions: ['.js', '.ts'],
  },
  externals: {
    'coc.nvim': 'commonjs coc.nvim',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              configFile: 'tsconfig.prod.json',
            },
          },
        ],
      },
    ],
  },
  output: {
    // path: path.join(__dirname, 'lib'),
    path: path.join('/Users/xusiyuan/.config/coc/extensions/node_modules/coc-floatinput', 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
  },
  plugins: [],
  node: {
    __dirname: false,
    __filename: false,
  },
};
