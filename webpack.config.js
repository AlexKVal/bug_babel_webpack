require('babel-core/register')({
  ignore: /node_modules/,
  optional: ['es7.objectRestSpread']
});

module.exports = {
  entry: "./client.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      // { test: /\.css$/, loader: "style!css" }
    ]
  }
};
