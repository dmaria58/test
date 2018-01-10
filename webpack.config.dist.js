var path=require('path');
var webpack = require('webpack');
var HtmlWebPlugin=require('html-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ParallelUglifyPlugin = require('uglifyjs-webpack-plugin');  //压缩html
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, './page/webs/src'); //__dirname 中的src目录，以此类推
var HTML_PATH = path.resolve(ROOT_PATH, './page/webs/template'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, './pro/main/dist'); //发布文件所存放的目录/main/dist/
var SHINE_PATH = path.resolve(ROOT_PATH, './page/webs/src/Tool'); 
var SHINE_FILE = path.resolve(SHINE_PATH, 'es6shim'); 
module.exports={
   entry: {
        app: APP_FILE,
        common: [
            "react",
            'react-dom',
            'react-router',
            'react-router-dom',
            'redux',
            'react-redux',
            'redux-thunk',
            'redux-promise'
        ],
        es6shine:SHINE_FILE,
    },
    output: {
        publicPath: './main/dist/', //编译好的文件，在服务器的路径,域名会自动添加到前面
        path: BUILD_PATH, //编译到当前目录
        chunkFilename: '[name]-[id].[chunkhash:8].bundle.js',
        filename: '[name].js', //编译后的文件名字
    },
    resolve:{
        extensions:['.js', '.jsx', '.less', '.css'],
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                  use:[{loader: 'css-loader'},{loader:"postcss-loader"}],
                  fallback: 'style-loader',
            })      
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract({
                  use:[{loader: 'css-loader' },{loader: 'postcss-loader'},{loader: 'less-loader'}],
                  fallback: 'style-loader',
            })
        } ,{
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=8192&name=main/dist/Img/[hash:8].[name].[ext]',
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel-loader','jsx'],
        }]
    },
    plugins: [
      new ExtractTextPlugin('../../[name].css'),
      new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            minify:{
                removeAttributeQuotes:true
            },
            chunksSortMode: function (chunk1, chunk2) {
              var order = ['es6shine', 'common', 'app'];
              var order1 = order.indexOf(chunk1.names[0]);
              var order2 = order.indexOf(chunk2.names[0]);
              return order1 - order2;  
            },
            filename: '../../index.html', //输出文件【注意：这里的根路径是module.exports.output.path】
            template: './page/webs/template/index.html', //html模板路径
            inject: 'body',
            title:"test",
            hash: true,
     }),
     new ParallelUglifyPlugin({
           cacheDir: BUILD_PATH,
           uglifyJS:{
             output: {
               comments: false
             },
             compress: {
               warnings: false
             }
           }
    }),
    ]
}
