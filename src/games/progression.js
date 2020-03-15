import { getNum, getDiff, getIndex } from './math.js';

const createProgression = (diff, num, index) => {
  const result = [];
  let counter = num;
  for (let i = 10; i > 0; i -= 1) {
    result.push(counter);
    counter += diff;
  }
  const hidedNum = result[index];
  result[index] = '..';
  return [result, hidedNum];
};

export const rule = 'What number is missing in the progression?';
export const game = () => createProgression(getDiff(), getNum(), getIndex());
