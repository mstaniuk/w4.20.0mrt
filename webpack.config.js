const webpack = require('webpack');
const path = require('path');
const definePlugin = new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
});

const config = {
    entry: () => {
        return {
            'app': './src/index.js',
        }
    },
    output: './dist/app.js',
    resolve: {
        modules: ["node_modules"]
    },
    mode: 'production',
};