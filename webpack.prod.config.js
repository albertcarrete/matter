const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/App.jsx'],
        vendor: ['react', 'react-dom','react-router'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module:{
    	rules:[
    		{
    			test:/\.jsx$/,
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
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js'}),
        new webpack.optimize.UglifyJsPlugin({
        	sourceMap: false,
        	warnings:false,
        	mangle:true
        })
    ]
};