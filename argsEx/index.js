// process 是 node 內建的一個全域物件，內含許多當前node執行時的程序資訊，不需使用 require()，如「const process = require('process');」即可直接呼叫使用（不過要先引入在使用也行）
// 呼叫 process.argv 可以得到一個字串陣列，內含至少兩個項目，第一個為執行執行 Node.js 的路徑，第二個為此被執行的js檔案的路徑，
// 若執行此程式時，比如使用指令「node index 參數一 參數二」，指令後方有帶入一些參數（參數數量不限），則這些參數可以透過 process.argv 第三個（含）以後的項目取得
// https://nodejs.org/docs/latest/api/process.html#process_process_argv

// 當啟動程式時為輸入參數則 process.argv 會取得如 ['/usr/local/bin/node', '/Users/mjr/work/node/process-args.js'] 的結果（此為示意結果，非本例實際輸出）
console.log(process.argv);

// 以下為官方範例
// Launching the Node.js process as:
// $ node process-args.js one two=three four

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

// Would generate the output:
// 0: /usr/local/bin/node
// 1: /Users/mjr/work/node/process-args.js
// 2: one
// 3: two=three
// 4: four
