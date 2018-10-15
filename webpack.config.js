const path = require('path');

module.exports = {
    entry: './index.jsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/' // allows you to specify the base path for all the assets within your application
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    },
    devServer: {
        historyApiFallback: true // redirect 404s to /index.html
    }
};