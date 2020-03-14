/* eslint-disable no-restricted-syntax */

import { engine } from '../index.js';


const rule = 'What number is missing in the progression?';

// ---showQuestion---
const getRandomNum = () => Math.floor((Math.random() * 100) + 2);
const getRandomDiff = () => Math.floor((Math.random() * 9) + 2);
const getRandomIndex = () => Math.floor(Math.random() * 10);

const createProgression = () => {
  const diff = getRandomDiff();
  let num = getRandomNum();
  let result = `${num}`;
  for (let i = 9; i > 0; i -= 1) {
    num += diff;
    result += ` ${num}`;
  }
  return result;
};

const createQuestion = (str) => {
  const result = str.split(' ');
  const index = getRandomIndex();
  result[index] = '..';
  return result.join(' ');
};

const showQuestion = () => createQuestion(createProgression());
// ---end---

// ---getAnswer---
const getAnswer = (str) => {
  const arr = str.split(' ');
  let index;
  let diff;
  let result;
  for (const num of arr) {
    if (num === '..') {
      if (arr.indexOf(num) <= 7) {
        index = arr.indexOf(num);
        diff = +arr[index + 2] - +arr[index + 1];
        result = +arr[index + 1] - diff;
      } else {
        index = arr.indexOf(num);
        diff = +arr[index - 1] - +arr[index - 2];
        result = +arr[index - 1] + diff;
      }
    }
  }
  return String(result);
};
// ---end---

export default () => engine(rule, showQuestion, getAnswer);
