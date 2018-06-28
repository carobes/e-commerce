module.exports = {
    mode: 'development',
    entry: ['./react/index.js'],
    output: {
        filename: "bundle.js",
        path: __dirname + "/public"
    },
    context: __dirname,
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: { presets: ['react', 'env', 'stage-0'] }
            }
        ]
    }
}