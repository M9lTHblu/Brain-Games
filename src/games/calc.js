import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What is the result of the expression?';

const createQuestionAndAnswer = () => {
  const num1 = getRandomNum(2, 101);
  const num2 = getRandomNum(2, 101);
  const expressionOperator = getRandomNum(0, 3);
  let question;
  let answer;
  switch (expressionOperator) {
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
      throw new Error(`Switch error! Unknown operator value: ${expressionOperator}`);
  }
  return [question, answer];
};

export default () => engine(description, createQuestionAndAnswer);
