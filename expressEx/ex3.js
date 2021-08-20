// 想要動態產生html(如html內容使用變數去帶入不同的值)，
// 我們可以使用範本引擎(常見的如 pug 或 Handlerbars）來達成，
// 本例使用 hbs 這個模組（還內含重用 html元件的功能），請先執行「 yarn add hbs」
// https://www.npmjs.com/package/hbs

const path = require('path');
const express = require('express');
const app = express();

// 透過 app.set('view engine') Express 會在內部載入範本引擎模組
// 模板的副檔名要是hbs且這些模板要放在專案根目錄下的views路徑下express才能找到
// app.set('views', './views'); // 此行為預設值，不指定則模板檔案存放的路徑時會自動去跟目錄的 views目錄下找所有hbs檔案
app.set('view engine', 'hbs');
app.get('', (req, res) => {
  // 要使用模板html可以使用 app.render(參數一, 參數二）的方法
  // 參數一是模版的檔名，可不用帶上hbs副檔名，參數二是要傳入html的變數物件，此例中 header.hbs模板中的{{msg}}會被替換成「Welcome!」的文字秀在畫面上
  res.render('header', {
    msg: 'Welcome!',
  });
});
app.listen('3030', () => {
  console.log('Server is up on port 3030!');
});
