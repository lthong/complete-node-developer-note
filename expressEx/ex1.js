/**
 * express 是一個node框架，可以用來建立網路伺服器
 * 比如建立路由，範例如下
 * 當在終端機執行此index.js後，此伺服器便已跑起來
 * 當透過瀏覽器訪問 http://localhost:3030/ 路徑時
 * 便可以得到 Hello Express! 的內容回傳
 */
const express = require('express');
const app = express();

// get代表當此伺服器收到 http [GET method] request時要做何事
// get(路徑, cb): 路徑參數代表能被請求的路徑位置（本例為根目錄），cb代表有收到此請求後要處理的事
// https://expressjs.com/zh-tw/starter/basic-routing.html
app.get('', (request, response) => {
  // response.send()可以把一些訊息回傳給 client，比如字串 'Hello Express!'，瀏覽器會直接秀出這串文字
  response.send('Hello Express!');

  // 也可以傳送html，瀏覽器收到後會自動把html轉換成DOM秀在畫面上
  // response.send('<h1>Hello Express!</h1>');

  // 也可以傳送object，此物件會自動被 JSON.stringify 轉換成 JSON 格式送出，瀏覽器收到後會再轉回JSON物件
  // response.send({ msg: 'Hello Express!' });
});

// app.listen() 可以將伺服器啟動在指定的 port#
app.listen('3010', () => {
  console.log('Server is up on port 3030!');
});
