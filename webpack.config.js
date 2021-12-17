const path = require('path');

module.exports = {

    entry: './App/main.js',

    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'app.js'
    },

    module:{
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
            }
        ]
    }

};