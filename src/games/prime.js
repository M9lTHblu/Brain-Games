import engine from '../index.js';
import { getRandomNum } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let result = 0;
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      result = i;
    }
  }
  return number === result;
};

const createQuestionAndAnswer = () => {
  const question = getRandomNum(2, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [rule, question, answer];
};

export default () => engine(createQuestionAndAnswer);
