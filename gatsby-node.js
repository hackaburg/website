const fs = require("fs");
const path = require("path");

const distPath = path.join(__dirname, "dist");
const publicPath = path.join(__dirname, "public");

exports.onPostBuild = () => {
  if (!fs.existsSync(distPath)) {
    fs.symlinkSync(publicPath, distPath);
  }
};
