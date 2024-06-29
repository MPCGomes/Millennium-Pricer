const path = require("path");

module.exports = {
  entry: {
    mypcards: "./src/mypcards/main.js",
    ligayugioh: "./src/ligayugioh/main.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js"],
  },
  mode: "production",
};
