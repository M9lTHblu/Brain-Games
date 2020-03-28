import engine from '../index.js';
import { getRandomNum } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = 0;
  let i = 2;
  while (result === 0) {
    if (number % i === 0) {
      result = i;
    }
    i += 1;
  }
  return number === result;
};

const createQuestionAndAnswer = () => {
  const question = getRandomNum(2, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [rule, question, answer];
};

export default () => engine(createQuestionAndAnswer);
