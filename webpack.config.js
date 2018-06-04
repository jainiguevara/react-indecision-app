const path = require('path');

// ENTRY POINT -> OUTPUT BUNDLE FILE
module.exports = {
    mode: 'development',    
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'public'),
        filename: 'bundle.js'
    }
}