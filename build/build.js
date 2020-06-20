/*
 * @Descripttion: 生成环境打包
 * @Author: peroLuo
 * @Date: 2020-06-18 15:43:31
 * @LastEditTime: 2020-06-18 16:23:46
 */

"use strict";
require("./check-versions")();

process.env.NODE_ENV = "production";

const ora = require("ora");
const rm = require("rimraf"); // 删除指定目录的所有文件
const path = require("path");
const chalk = require("chalk");
const webpack = require("webpack");
const config = require("../config");
const webpackConfig = require("./webpack.prod.conf");

const spinner = ora("building for production...");
spinner.start();

// 删除静态文件static、开始打包
rm(
  path.join(config.build.assetsRoot, config.build.assetsSubDirectory),
  (err) => {
    if (err) throw err;
    webpack(webpackConfig, (err, stats) => {
      spinner.stop();
      if (err) throw err;
      process.stdout.write(
        stats.toString({
          colors: true,
          modules: false,
          children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
          chunks: false,
          chunkModules: false,
        }) + "\n\n"
      );

      if (stats.hasErrors()) {
        console.log(chalk.red("  Build failed with errors.\n"));
        process.exit(1);
      }

      console.log(chalk.cyan("  Build complete.\n"));
      console.log(
        chalk.yellow(
          "  Tip: built files are meant to be served over an HTTP server.\n" +
            "  Opening index.html over file:// won't work.\n"
        )
      );
    });
  }
);
