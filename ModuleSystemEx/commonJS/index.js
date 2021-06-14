// node with v14.2.0
// 如果是以下兩種檔案，node 則視為 commonJS 檔案類型處理
// 1. 副檔名是 .cjs 的檔案
// 2. package.json 有 "type": "commonjs" 的設定(或完全沒設定"type"），所有副檔名為 .js 的檔案
// https://nodejs.org/api/packages.html#packages_determining_module_system

const { randomNum, isNumber, isString } = require('./validator');
console.log(randomNum);
console.log(isNumber(1));
console.log(isNumber('1'));
console.log(isString(1));
console.log(isString('1'));
// output...
// 6 (unfixed answer)
// true
// false
// false
// true

const helloMsg = require('./msg');
console.log(helloMsg); // hello world (common JS)
