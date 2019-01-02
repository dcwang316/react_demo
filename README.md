从头开始实现一个react单页面开发
1.首先在命令行工具里面进入到该项目目录下，然后添加package.json文件，执行命令：npm init，可自行添加一些信息，一路回车即可。

2.创建webpack.config.js文件

3.下载react相关依赖 npm i react react-dom react-router-dom -S

4.下载webpack，npm i webpack -D ，同时需要全局安装webpack，方便命令行打包使用，执行npm i -g webpack

5.在项目中新建文件夹src,mkdir src,在src下面新建一个App.js文件

6.在webpack.config.js中写入配置，并且安装webpackhtmlplugin和babel-loader，执行
npm i html-webpack-plugin babel-loader @babel/core @babel/preset-env @babel/preset-react -D

7.往App.js里面写入一些内容，并且添加一个index.html文件，就可以执行打包了，通常会提示需要安装webpack-cli，那就安装呗，安装之后，再次执行webpack，就可以看到打包成功啦