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
});
app.get('/about', (req, res) => {
  // 要使用模板html可以使用 app.render(參數一, 參數二）的方法
  // 參數一是模版的檔名，可不用帶上hbs副檔名，參數二是要傳入html的變數物件，此例中 header.hbs模板中的{{msg}}會被替換成「Welcome!」的文字秀在畫面上
  res.render('About', {
    content: 'Welcome to About page',
  });
});

// express 對應路由的方式是由上往下依序找，如果在前面就找到對應路由要回應的內容後
// 就不會再往執行其他路由相關的程式，所以如果要撰寫404頁面，
// 則可以使用'*'這個萬用字元，這代表所有路徑都會指向此結果去做回傳
// 所以如果前面設定的路徑都沒有對應，那就代表要回傳404頁面，然後記得要放在最後一個路由設定去做檢查
app.get('/about/*', (req,res) => {
  res.render(('404'),{ content: 'Not found for about page' })
})
app.get('*', (req,res) => {
  res.render(('404'),{ content: 'Sorry, you have a wrong page!' })
})

// 為了要能更新.hbs相關檔案時，也能存檔後重新編譯
// 執行此程式的指令可以使用 「nodemon ex4 -e js,hbs」
// 如此不管是 js or hbs 檔案都可以在程式更新並存檔後自動編譯
// 不須重新執行「nodemon ex4」，到瀏覽去重新載入就可以看到最新的結果
app.listen('3040', () => {
  console.log('Server is up on port 3040!');
});
