import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => b === 0 ? a : getGCD(b, a % b);

const createQuestionAndAnswer = () => {
  const num1 = getRandomNum(2, 101);
  const num2 = getRandomNum(2, 101);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [question, answer];
};

export default () => engine(description, createQuestionAndAnswer);
