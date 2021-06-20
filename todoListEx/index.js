const yargs = require('yargs');
const { addTodo } = require('./utils');

yargs.command(
  'add',
  'add a todo',
  {
    todo: {
      describe: 'todo title',
      demandOption: true,
      type: 'string',
    },
  },
  ({ todo }) => {
    addTodo(todo);
  }
).argv;
