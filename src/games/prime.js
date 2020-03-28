import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const createQuestionAndAnswer = () => {
  const question = getRandomNum(2, 101);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => engine(description, createQuestionAndAnswer);
