const path = require('path');

module.exports = {
    entry: './index.js',

    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.txt$/, 
                use: 'raw-loader'
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    
    },

    devServer: {
        contentBase: path.join(__dirname,'public')
    }

   }