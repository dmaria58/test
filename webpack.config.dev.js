var path=require('path');
var webpack = require('webpack');
var HtmlWebPlugin=require('html-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html
var ParallelUglifyPlugin = require('uglifyjs-webpack-plugin');  //压缩html
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, './page/webs/src'); //__dirname 中的src目录，以此类推
var HTML_PATH = path.resolve(ROOT_PATH, './page/webs/template'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, './dev/main/dist'); //发布文件所存放的目录/main/dist/
module.exports={
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            APP_FILE
        ]
    },
    output: {
        publicPath: './main/dist/', //编译好的文件，在服务器的路径,域名会自动添加到前面
        path: BUILD_PATH, //编译到当前目录
        filename: '[name].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js',
    },
    resolve:{
        extensions:['.js', '.jsx', '.less', '.css']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loaders: ['style-loader','css-loader',"postcss-loader"]
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            loaders: ['style-loader','css-loader','postcss-loader','less-loader']
        },{
            test: /\.(png|jpg|gif)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
        },{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel-loader','jsx']
        }]
    },
    plugins: [
     new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
            filename: '../../index.html', //输出文件【注意：这里的根路径是module.exports.output.path】
            template: './page/webs/template/index.html', //html模板路径
            inject: 'body',
            title:"百世物流",
            hash: true,
     }),
    ]
}
