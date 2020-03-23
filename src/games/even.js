import { getRandomNum } from '../math.js';

const isEven = (number) => number % 2 === 0;

export const createQuestionAndAnswer = () => {
  const question = getRandomNum(2, 101);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

