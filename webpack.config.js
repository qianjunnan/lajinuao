var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
var getHtmlConfin = function(name){
	return{
		template:'./src/view/'+ name +'.html',
			filename:'view/'+ name +'.html',
			inject:true,
			hash:true,
			chunks:['common',name]
	}
}

var config = {
	entry: {
		'common': ['./src/page/common/index.js'],
		'index': './src/page/index/index.js',
		'user-login': './src/page/user-login/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath:'/dist',
		filename:'js/[name].js'
	},
	externals:{
		'jquery' : 'window.jQuery'
	},
	// optimization:{
	// 	splitChunks:{
	// 		cacheGroups:{
	// 			commons:{
	// 				name:'base',
	// 				chunks:'initial',
	// 				minChunks: 2,
	// 				minSize: 0				
	// 			}	
	// 		}
	// 	}
	// },
	module:{
		rules:[
			{
				test:/\.css$/, 
				//loader:"style-loader!css-loader",
				loader: ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:"css-loader"
				})
			},
			{
				test:/\.(gif|png|jpg|woff|svg|eot|ttf).??.*$/,
				loader:'url-loader?limit=100&name=resource/[name].[ext]'
			}
		]
	},
	plugins:[
		new ExtractTextPlugin("css/[name].css"),
		new HtmlWebpackPlugin(getHtmlConfin('index')),
		new HtmlWebpackPlugin(getHtmlConfin('user-login')),
	]
		
}	

if('dev'===WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088');
}
			
module.exports = config;