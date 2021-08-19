const path = require('path');
const express = require('express');
const app = express();

// __dirname 代表此檔案當前目錄，path.resolve()會把傳入的路徑參數組合起來變成一個絕對路徑
// staticFilesPath 可以得到和此檔案相同目錄下的 public 目錄的路徑
const staticFilesPath = path.resolve(__dirname, './public');
// express.static() 是一個內建的中介函式，用來設定存放靜態資源(如html,js,css,img...)的目錄路徑，
// 這些資源express server 會自動根據瀏覽器的請求傳送給 client
// 特別是 html檔案會像使用 「app.get(路徑名)」的路由效果，自動把相對的路由匹配到相對的html檔案
// 比如 http://localhost:3030 會得到 index.html
// http://localhost:3030/about.html 會得到 about.html
// 而由於中介函式是根據順序依序執行，故如果此行底下有「app.get('/')」的指令便不會生效，會被此行覆蓋
// https://expressjs.com/zh-tw/starter/static-files.html
app.use(express.static(staticFilesPath));

// app.listen() 可以將伺服器啟動在指定的 port#
app.listen('3030', () => {
  console.log('Server is up on port 3030!');
});
