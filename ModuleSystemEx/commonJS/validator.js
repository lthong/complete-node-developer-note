const randomNum = Number((Math.random() * 10).toFixed(0));

const isNumber = (num) => typeof num === 'number';
const isString = (str) => typeof str === 'string';

module.exports = {
  randomNum,
  isNumber,
  isString,
};
