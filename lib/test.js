const { getAST, getDependencies } = require('./parser');
const path = require('path');

const ast = getAST(path.join(__dirname, '../src/index.js'));

// console.log(ast);

const dependencies = getDependencies(ast);

console.log(dependencies);


