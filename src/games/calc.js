import engine from '../index.js';
import getRandomNum from '../math.js';


const createQuestionAndAnswer = () => {
  const rule = 'What is the result of the expression?';
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
  }
  return [rule, question, answer];
};

export default () => engine(createQuestionAndAnswer);
