import { getRandomNum } from '../math.js';

const isPrime = (question) => {
  let result = 0;
  for (let i = 2; result === 0; i += 1) {
    if (question % i === 0) result += i;
  }
  const answer = (question === result) ? 'yes' : 'no';
  return [question, answer];
};

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const game = () => isPrime(getRandomNum(2, 101));
