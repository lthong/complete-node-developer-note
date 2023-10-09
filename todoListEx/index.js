// todoList example
// 使用yargs套件，將終端輸入的結果（即要記下的待辦事項) 存在本地（與js檔案相同路徑下）的一個json檔案，功能包含「新增」、「刪除」、「讀取整個列表」

const yargs = require('yargs');
const { addTodo, removeTodo, removeAllTodo, readTodoList } = require('./utils');

yargs
  // ex, node index add --todo=買東西
  .command(
    'add',
    'add a todo',
    {
      // todo參數定義（必傳且為自動轉型成字串）
      todo: {
        describe: 'todo title',
        demandOption: true,
        type: 'string',
      },
    },
    ({ todo }) => {
      addTodo(todo);
    }
  )
  // ex, node index remove --todo=買東西
  .command(
    'remove',
    'remove a todo',
    {
      // todo參數定義（必傳且為自動轉型成字串）
      todo: {
        describe: 'todo title',
        demandOption: true,
        type: 'string',
      },
    },
    ({ todo }) => {
      removeTodo(todo);
    }
  )
  // ex, node index read
  .command('read', 'read the todo list', {}, () => {
    readTodoList();
  })
  // ex, node index removeAll
  .command('removeAll', 'remove all todo', {}, () => {
    removeAllTodo();
  }).argv;
