/**
 * express 是一個node框架，可以用來建立網路伺服器
 * 比如建立路由，範例如下
 * 當在終端機執行此index.js後，此伺服器便已跑起來
 * 當透過瀏覽器訪問 http://localhost:3030/ 路徑時
 * 便可以得到 Hello Express! 的內容回傳
 */
const express = require('express');
const app = express();

// get代表當此伺服器收到 http get method request時要做何事
// get(路徑, cb): 路徑參數代表能被請求的路徑位置（本例為根目錄），cb代表有收到此請求後要處理的事
app.get('', (request, response) => {
  // response.send()可以把一些訊息回傳給 client
  response.send('Hello Express!');
});

// app.listen() 可以將伺服器啟動在指定的 port#
app.listen('3030');
