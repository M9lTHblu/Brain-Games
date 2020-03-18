import { getRandomNum } from '../math.js';

const createGame = (num1, operation, num2) => {
  let question;
  let answer;
  switch (operation) {
    case 0:
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 1:
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2:
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    default:
  }
  return [question, answer];
};

export const rule = 'What is the result of the expression?';
export const game = () => createGame(getRandomNum(2, 100), getRandomNum(0, 3), getRandomNum(2, 100));
