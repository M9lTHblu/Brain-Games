import { getNum } from './math.js';

const isPrime = (num) => {
  let result = 0;
  for (let i = 2; result === 0; i += 1) {
    if (num % i === 0) result += i;
  }
  const answer = (num === result) ? 'yes' : 'no';
  return [num, answer];
};

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const game = () => isPrime(getNum());
