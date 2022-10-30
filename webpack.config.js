const path = require("path");

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        clean: true,
        path: path.join(__dirname, 'dist'),
    },
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    target: "node",
    resolve: {
        // Add `.ts` as a resolvable extension.
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            // all files with a `.ts` extension will be handled by `ts-loader`
            { 
                test: /\.ts$/, 
                loader: "ts-loader" ,
                include: [path.join(__dirname, 'src')]
            }
        ]
    },
}