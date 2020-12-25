const Compiler = require('./compiler');
const path = require('path');

const context = process.cwd();
const options = require(path.join(context, './tiny-webpack.config.js'));
new Compiler(options).run();
