// https://github.com/yargs/yargs
// yargs 這個套件可以自動將 node啟動js檔案時所傳入的參數解析成object（如果參數格式是「--key=value」的話），方便參數的取得，範例如下

const yargs = require('yargs');
console.log(process.argv);
console.log(yargs.argv);

// Launching the Node.js process as:
// $ node index.js --title=hello

// the output will get...
// ['/usr/local/bin/node', '/Users/mjr/work/node/index.js', '--title=hello']
// { _: [], title: 'hello', '$0': 'index' }
