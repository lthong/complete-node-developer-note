// node with v14.2.0
// 如果想使用JS 的 es6 module 語法，如「import xxx from 'ooo'」，則需要在 package.json 加入 "type": "module" 的設定，或是不改動 package.json，但把程式副檔名命名為 .mjs，所以當遇到以下兩種檔案時，node會把檔案視為 ES modules
//  1. 副檔名是.mjs 的檔案
//  2. package.json 有 "type": "module" 的設定，所有副檔名為 .js 的檔案
// https://nodejs.org/api/packages.html#packages_determining_module_system

import helloMsg from './msg.js';
console.log(helloMsg); // hello world (es module)
