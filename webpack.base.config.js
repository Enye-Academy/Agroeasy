const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require("imagemin-webpack");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    mode: devMode ? 'development' : 'production',
<<<<<<< HEAD
    output: {
        path: `${__dirname  }/dist`,
        filename: "bundle.js",
    },
=======
>>>>>>> master
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
<<<<<<< HEAD
                    'css-loader',
=======
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader',
>>>>>>> master
                    'sass-loader',
                ],
            },
            {
<<<<<<< HEAD
                test: /\.js$/,
                exclude: /node_modules/,
=======
                exclude: /node_modules/,
                test: /\.js$/,
>>>>>>> master
                use: {
                    loader: 'babel-loader',
                },
            },
            {
<<<<<<< HEAD
                test: /\.(png|svg|jpg|gif)$/,
=======
                test: /\.(png|svg|jpe?g|gif)$/,
>>>>>>> master
                use: ['file-loader'],
            },
        ],
    },
<<<<<<< HEAD
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        }),
    ],
=======
>>>>>>> master
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
<<<<<<< HEAD
                    name: 'styles',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true,
=======
                    chunks: 'all',
                    enforce: true,
                    name: 'styles',
                    test: /\.css$/,
>>>>>>> master
                },
            },
        },
    },
<<<<<<< HEAD
=======
    output: {
        chunkFilename: "[id].[hash].js",
        filename: "[name].[hash].js",
        path: `${__dirname}/dist`,
    },
    performance: {
        hints: false,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
            filename: devMode ? '[name].css' : '[name].[hash].css',
        }),
        new CopyWebpackPlugin([{
            from: 'images/',
        }]),
        new ImageminPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
                plugins: [
                    imageminGifsicle({
                        interlaced: true,
                    }),
                    imageminJpegtran({
                        progressive: true,
                    }),
                    imageminOptipng({
                        optimizationLevel: 5,
                    }),
                    imageminSvgo({
                        removeViewBox: true,
                    }),
                ],
            },
            name: '[name].[ext]',
        }),
    ],
>>>>>>> master
};
