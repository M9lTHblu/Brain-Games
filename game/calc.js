
import { engine } from '../src/index.js';


const rule = 'What is the result of the expression?';

const getNumbers = () => {
  const num = () => Math.floor(Math.random() * 50);
  const arr = [];
  let count = 2;
  while (count > 0) {
    const temp = num();
    arr.push(temp);
    count -= 1;
  }
  return arr;
};

const getString = () => {
  const coll = getNumbers();
  const getOperator = () => Math.floor(Math.random() * Math.floor(4));
  switch (getOperator()) {
    case 0:
      return `${coll[0]} + ${coll[1]}`;
    case 1:
      return `${coll[0]} - ${coll[1]}`;
    case 2:
      return `${coll[0]} * ${coll[1]}`;
    case 3:
      return `${coll[0]} / ${coll[1]}`;
    default:
  }
};


const getExpressionOfString = (str) => {
  const arr = str.split(' ');
  let result;
  if (arr[1] === '+') {
    result = +arr[0] + +arr[2];
  }
  if (arr[1] === '-') {
    result = +arr[0] - +arr[2];
  }
  if (arr[1] === '*') {
    result = (+arr[0]) * (+arr[2]);
  }
  if (arr[1] === '/') {
    result = (+arr[0] / +arr[2]);
  }
  return String(result);
};

export default () => engine(rule, getString, getExpressionOfString);
