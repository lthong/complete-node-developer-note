const fs = require('fs');
const chalk = require('chalk');

const loadList = () => {
  try {
    // https://nodejs.org/api/fs.html#fsreadfilesyncpath-options
    // fs.readFileSync()得到的值是類似二進制資料的緩衝區數據，人類無法閱讀，必須先用buffer.toString()轉換成JSON字串
    const buffer = fs.readFileSync('todoList.json');
    // the format of todoList.json is json
    const list = JSON.parse(buffer.toString());
    return list;
  } catch (e) {
    return [];
  }
};

const updateList = (newList) => {
  fs.writeFileSync('todoList.json', JSON.stringify(newList));
};

const addTodo = (todo) => {
  const list = loadList();
  const isTodoExisted = list.includes(todo);
  if (!isTodoExisted) {
    updateList([...list, todo]);
    console.log(chalk.green.inverse(`${todo} is added!`));
  } else {
    console.log(chalk.red.inverse(`This ${todo} is existed!`));
  }
};

const removeTodo = (todo) => {
  const list = loadList();
  const isTodoExisted = list.includes(todo);
  if (isTodoExisted) {
    const newList = list.filter((item) => item !== todo);
    updateList(newList);
    console.log(chalk.green.inverse(`${todo} has been removed!`));
  } else {
    console.log(chalk.red.inverse('No todo removed!'));
  }
};

const readTodoList = () => {
  const list = loadList();
  if (!list.length) {
    console.log(chalk.yellow.inverse('No todo in here!'));
    return;
  }
  console.log(chalk.inverse('Todo list...'));
  list.forEach((item) => {
    console.log(chalk.greenBright.inverse(item));
  });
};

const removeAllTodo = () => {
  updateList([]);
  console.log(chalk.green.inverse('All todo removed!'));
};

module.exports = {
  addTodo,
  removeTodo,
  removeAllTodo,
  readTodoList,
};
