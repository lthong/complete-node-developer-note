// 想要動態產生html(如html內容使用變數去帶入不同的值)，
// 我們可以使用範本引擎(常見的如 pug 或 Handlerbars）來達成，
// 本例使用 hbs 這個模組（還內含重用 html元件的功能），請先執行「 yarn add hbs」
// https://www.npmjs.com/package/hbs

const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();
const templatesViewPath = path.resolve(__dirname, './templates/views');
const templatesPartialPath = path.resolve(__dirname, './templates/partials');

// 透過 app.set('view engine') Express 會在內部載入範本引擎模組
app.set('view engine', 'hbs');
// 指定在 templatesViewPath 目錄下找所有hbs檔案
app.set('views', templatesViewPath);
// 如果有某些如 header, footer 等頁面可共用的html，可以個別設定為一個hbs檔案，
// 然後使用「hbs.registerPartials(這些共用元件hbs檔案目錄的位置)」去設定，
// 並且在想要引用這些共用元件的hbs檔案中使用如「{{>header}}」的語法即可成功飲用，「header」可替換為其他共用元件的hbs檔名
hbs.registerPartials(templatesPartialPath);

app.get('', (req, res) => {
  // 要使用模板html可以使用 app.render(參數一, 參數二）的方法
  // 參數一是模版的檔名，可不用帶上hbs副檔名，參數二是要傳入html的變數物件，此例中 header.hbs模板中的{{msg}}會被替換成「Welcome!」的文字秀在畫面上
  res.render('index', {
    content: 'Welcome to Home page',
  });
  // res.render('About', {
  //   content: 'Welcome to About page',
  // });
});
app.listen('3040', () => {
  console.log('Server is up on port 3030!');
});
