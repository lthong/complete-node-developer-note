const fs = require('fs');
const chalk = require('chalk');

const loadList = () => {
  try {
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

const addTodo = (newTodo) => {
  const list = loadList();
  const isTodoExisted = list.includes(newTodo);
  if (!isTodoExisted) {
    updateList([...list, newTodo]);
    console.log(chalk.green.inverse('New todo added!'));
  } else {
    console.log(chalk.red.inverse('This todo is existed!'));
  }
};

const removeTodo = (todo) => {
  const list = loadList();
  const isTodoExisted = list.includes(todo);
  if (isTodoExisted) {
    const newList = list.filter((item) => item !== todo);
    updateList(newList);
    console.log(chalk.green.inverse('The todo removed!'));
  } else {
    console.log(chalk.red.inverse('No todo removed!'));
  }
};

module.exports = {
  addTodo,
  removeTodo,
};
