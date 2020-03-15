import { getNum, getDiff, getIndex } from './math.js';

const createProgression = (diff, num, index) => {
  let result = [];
  for (let i = 10; i > 0; i -= 1) {
    result.push(num);
    num += diff;
  }
  const hidedNum = result[index];
  result[index] = '..';
  return[result, hidedNum];
};

export const rule = 'What number is missing in the progression?';
export const game = () => createProgression(getDiff(), getNum(), getIndex());
