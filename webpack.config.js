const path = require('path');

module.exports = {

    entry: './src/main.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },

    module:{
        rules: [
            {
              test: /\.css$/i,
              use: ["style-loader", "css-loader"]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
        ]
    }

};