// yargs.command() 可以把輸入的參數定義為一個個指令，「node [js檔名] [指令1]」比如「node command add」
// 每個指令都可以有各自專屬的參數(builder object)
// 可以設定輸入指令後要執行的程式(handler func, 如果有輸入參數則會順便帶入)，範例如下
// https://github.com/yargs/yargs/blob/master/docs/api.md#commandmodule
// https://github.com/yargs/yargs/blob/master/docs/api.md#optionkey-opt

const yargs = require('yargs');

// 指令「node command add --title=xxx --body=ooo」寫法一
yargs.command({
  // command 為指令名稱
  command: 'add',
  // describe 為此指令的描述，會被顯示在「$ node command.js --help」得到的結果中，讓使用者查閱指令用法
  describe: 'add a note',
  // builder 可定義此指令有哪些參數需傳入，以及該參數的型態及是否必填等等
  builder: {
    // 參數 title 的設定
    title: {
      describe: 'Note title', // title 參數的描述，「$ node command.js --help」 中可以查閱
      demandOption: true, // title 為必填參數，若未傳入會得到「缺少這些必須的引數：title」的提示
      type: 'string', // title 型態必須是字串，即使傳入的參數不合此型態也會被自動轉型，所以 handler 收到的 argv 是已經轉型後的結果
    },
    // 參數 body 的設定
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  // handler 是當指令被呼叫時要執行的函式，可取得終端機傳入的參數
  handler: function (argv) {
    const { title, body } = argv;
    console.log('add a note! (course ex)', '\ntitle:', title, '\nbody:', body);
    // the output of 「$ node command add --title="A new note" --body="Hello yargs"」is ...
    // add a note! (course ex)
    // title: A new note
    // body: Hello yargs
  },
}).argv;

// ====================================================================
// 指令「node command add --title=xxx --body=ooo」寫法二（需要先把寫法一註解起來才會生效）
// 官網用法：
yargs.command(
  // command name
  'add',
  // command description
  'add a note',
  // builder object to give hints about the options that your command accepts
  {
    // 參數 title 的設定
    title: {
      // https://github.com/yargs/yargs/blob/master/docs/api.md#optionkey-opt
      describe: 'Note title', // title 參數的描述，「$ node command.js --help」 中可以查閱
      demandOption: true, // title 為必填參數，若未傳入會得到「缺少這些必須的引數：title」的提示
      type: 'string', // title 型態必須是字串
    },
    // 參數 body 的設定
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'number',
      // 若使用者沒傳入參數 body 時會使用此預設值123，亦即有設定 default 時，demandOption: true 的設定會被忽視
      default: 123,
    },
  },
  // handler func
  (argv) => {
    const { title, body } = argv;
    console.log('========================================');
    console.log('add a note! (another ex)', '\ntitle:', title, '\nbody:', body);
    // the output of 「$ node command add --title="A new note" --body=100」is ...
    // add a note! (another ex)
    // title: A new note
    // body: 100

    // the output of 「$ node command add --title="A new note"」is ...
    // add a note! (another ex)
    // title: A new note
    // body: 123
  }
).argv;

// =====================================================
// 在終端機執行此指令 $ node command --help ，會得到以下輸出
// 命令：
//   index add  add a note

// 選項：
//   --help     顯示說明                                          [布林]
//   --version  顯示版本                                          [布林]

// =====================================================
// 在終端機執行此指令 $ node command add，會得到以下輸出
// add a note

// 選項：
//   --help     顯示說明                                          [布林]
//   --version  顯示版本                                          [布林]
//   --title    Note title                                 [字串] [必須]
//   --body     Note body                                  [字串] [必須]

// 缺少這些必須的引數：title, body
