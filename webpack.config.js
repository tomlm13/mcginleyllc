const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
 template: "./src/index.html",
 filename: "./index.html"
});
module.exports = {
  resolve: {
    extensions: [".ts", ".js",".json",".jpeg"]
  },
mode: 'development',
  module: {
    rules: [
  {
    test: /\.(png|jpg|gif|jpeg)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
          limit: 8192,
          },
        },
      ],
  },
  {
   test: /\.js$/,
   exclude: /node_modules/,
   use: {
     loader: "babel-loader",
   }
 },
  {
   test: /\.css$/,
   use: ["style-loader", "css-loader"]
  }
]},
 plugins: [htmlPlugin]
};
