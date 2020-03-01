
import { engine } from '../src/index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const question = () => Math.floor(Math.random() * (100 - 2) + 2);

const isPrime = (num) => {
  let result = 0;
  let i = 2;
  while (result === 0) {
    if (num % i === 0) result += i;
    i += 1;
  }
  return num === result ? 'yes' : 'no';
};

export default () => engine(rule, question, isPrime);
