import { getNum } from './math.js';

const isEven = (num) => {
  const result = (num % 2 === 0) ? 'yes' : 'no';
  return [num, result];
};

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
export const game = () => isEven(getNum());
