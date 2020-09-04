const path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',

    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'}
        ]
    }
}