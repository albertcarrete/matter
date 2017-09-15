const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        vendor: ['react', 'react-dom','react-router'],
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'app.bundle.js'
    },
    module:{
    	rules:[
    		{
    			test:/\.js$/,
    			exclude: /(node_modules)/,
    			loader:"babel-loader",
    			options:{
    				presets:['es2015', 'react']
    			}
       		}
    	]
    },
    devServer:{
        port: 8000,
        contentBase: 'static',
        proxy: {
            '/api/*': {
                target: 'http://localhost:3000'
            }
        }
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'})
    ]
};