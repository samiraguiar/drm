const path = require('path')
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
    entry: {
        'app': path.resolve(__dirname, 'app/app.js')
    },
    devtool: 'eval-source-map',
    mode: 'development',
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        splitChunks: {
            name: 'initial',
            filename: 'js/commons.bundle.js'
        }
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('autoprefixer')
                                ];
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new WebpackBuildNotifierPlugin({
            title: 'Dreamlines'
        })
    ],
    devServer: {
        publicPath: '/dist'
    }
};
