import { getNum } from './math.js';

const isPrime = (num) => {
  let result = 0;
  let i = 2;
  while (result === 0) {
    if (num % i === 0) result += i;
    i += 1;
  }
  const answer = (num === result) ? 'yes' : 'no';
  return [num, answer];
};

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const game = () => isPrime(getNum());
