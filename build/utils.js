/*
 * @Descripttion:
 * @Author: peroLuo
 * @Date: 2020-06-18 15:50:56
 * @LastEditTime: 2020-06-22 20:00:59
 */
"use strict";
const path = require("path");
const config = require("../config");
const packageConfig = require("../package.json");

const wordDir = path.join(__dirname, "..", "src");

exports.wordDir = wordDir;

exports.assetsPath = function (_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.createNotifierCallback = () => {
  const notifier = require("node-notifier");

  return (severity, errors) => {
    if (severity !== "error") return;

    const error = errors[0];
    const filename = error.file && error.file.split("!").pop();

    notifier.notify({
      title: packageConfig.name,
      message: severity + ": " + error.name,
      subtitle: filename || "",
      icon: path.join(__dirname, "logo.png"),
    });
  };
};
