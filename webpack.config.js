const { readdirSync } = require("fs");
const { join } = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const LessGlobPlugin = require("less-plugin-glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDevelopmentBuild = process.env.NODE_ENV !== "production";

const templatePath = "./src/templates/pages";
const templateHtmlPlugins =
  readdirSync(templatePath)
    .map((template) => new HtmlWebpackPlugin({
      template: join(templatePath, template),
      filename: template.replace(/\.pug$/, ".html"),
    }));

module.exports = {
  entry: {
    hackaburg: "./src/ts/index.ts",
    stylesheet: "./src/less/stylesheet.less",
  },
  output: {
    path: join(__dirname, "dist"),
    filename:
      isDevelopmentBuild
        ? "[name].[hash].js"
        : "[name].[contenthash].min.js",
  },
  resolve: {
    extensions: [
      ".ts",
      ".js",
      ".less",
    ],
  },
  plugins: [
    ...templateHtmlPlugins,
    new CopyWebpackPlugin([
      {
        from: "./src/images",
        to: "assets/images",
      },
    ]),
    new ImageminWebpackPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      disable: isDevelopmentBuild,
    }),
    new MiniCssExtractPlugin({
      filename:
        isDevelopmentBuild
          ? "[name].[hash].css"
          : "[name].[contenthash].min.css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
      },
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDevelopmentBuild,
            },
          },
          {
            loader: "css-loader",
            options: {
              url: false,
              modules: false,
            },
          },
          {
            loader: "less-loader",
            options: {
              paths: [
                join(__dirname, "./src"),
              ],
              plugins: [
                LessGlobPlugin,
              ],
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    },
  },
  externals: {
    "js-cookie": "Cookies",
  },
  devServer: {
    port: 8080,
  },
};
