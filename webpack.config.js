const path = require('path');
const outputDir = path.resolve(__dirname, 'dist/js/');
​
module.exports = {
    devtool: 'eval-source-map',
    entry: {
        'main': path.resolve(__dirname, 'src/js/main.js'),
        'nav': path.resolve(__dirname, 'src/js/nav.js'),
        'footer': path.resolve(__dirname, 'src/js/footer.js'),
        'footer': path.resolve(__dirname, 'src/js/search.js')
    },
    mode: 'production',
    output: {
        path: outputDir,
        filename: '[name].js'
    }
};