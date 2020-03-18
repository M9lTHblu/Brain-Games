import { getRandomNum } from '../math.js';

const getGCD = (a, b) => {
  if (a === b) return a;
  if (a < b) {
    return getGCD(a, b - a);
  }
  return getGCD(a - b, b);
};

const createGame = (num1, num2) => {
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, answer];
};

export const rule = 'Find the greatest common divisor of given numbers.';
export const game = () => createGame(getRandomNum(2, 101), getRandomNum(2, 101));
