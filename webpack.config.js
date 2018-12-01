module.exports = {
  entry: "./client/src/index.jsx",
  output: {
    path: __dirname + '/client/public/',
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
      }
    ]
  }
}