import engine from '../index.js';
import getRandomNum from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const createQuestionAndAnswer = () => {
  const question = getRandomNum(2, 101);
  const answer = isEven(question) ? 'yes' : 'no';
  return [rule, question, answer];
};

export default () => engine(createQuestionAndAnswer);
