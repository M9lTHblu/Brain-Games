import { getNum } from './math.js';

const isEven = (question) => {
  const answer = (question % 2 === 0) ? 'yes' : 'no';
  return [question, answer];
};

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const game = () => isEven(getNum());
