import { getNum, getDiff, getIndex } from './math.js';

const createGame = (diff, num, index) => {
  const question = [];
  let counter = num;
  for (let i = 10; i > 0; i -= 1) {
    question.push(counter);
    counter += diff;
  }
  const answer = question[index];
  question[index] = '..';
  return [question, answer];
};

export const rule = 'What number is missing in the progression?';
export const game = () => createGame(getDiff(), getNum(), getIndex());
