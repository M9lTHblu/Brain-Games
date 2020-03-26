import engine from '../index.js';
import getRandomNum from '../math.js';

const getGCD = (a, b) => {
  if (a === b) return a;
  return (a < b) ? getGCD(a, b - a) : getGCD(a - b, b);
};

const createQuestionAndAnswer = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  const num1 = getRandomNum(2, 101);
  const num2 = getRandomNum(2, 101);
  const question = `${num1} ${num2}`;
  const answer = getGCD(num1, num2);
  return [rule, question, answer];
};

export default () => engine(createQuestionAndAnswer);
