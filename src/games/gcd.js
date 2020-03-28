import engine from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => (b === 0 ? Math.abs(a) : getGCD(b, a % b));

const createQuestionAndAnswer = () => {
  const num1 = getRandomNum(2, 101);
  const num2 = getRandomNum(2, 101);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [rule, question, answer];
};

export default () => engine(createQuestionAndAnswer);
