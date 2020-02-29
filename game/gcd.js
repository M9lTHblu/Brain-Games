import { engine } from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getCollOfNums = () => {
  const num = () => Math.floor(Math.random() * 100 + 2);
  const result = `${num()} ${num()}`;
  return result;
};


const getDivider = (a, b) => {
  if (a === b) return a;
  if (a < b) {
    return getDivider(a, b - a);
  }
  return getDivider(a - b, b);
};


const answer = (str) => {
  const arr = str.split(' ');
  return getDivider(arr[0], arr[1]);
};

export default () => engine(rule, getCollOfNums, answer);
