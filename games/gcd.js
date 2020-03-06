import { engine } from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const showQuestion = () => {
  const num = () => Math.floor(Math.random() * (100 - 2) + 2);
  const result = `${num()} ${num()}`;
  return result;
};

// ---getAnswer---
const getDivider = (a, b) => {
  if (a === b) return a;
  if (a < b) {
    return getDivider(a, b - a);
  }
  return getDivider(a - b, b);
};

const getAnswer = (str) => {
  const arr = str.split(' ');
  return getDivider(arr[0], arr[1]);
};
// ---end---

export default () => engine(rule, showQuestion, getAnswer);
