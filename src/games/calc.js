import { getNum, getNumForOperation } from './math.js';

const createExpression = (num1, operation, num2) => {
  let expression;
  let resultOfExpression;
  switch (operation) {
    case 0:
      expression = `${num1} - ${num2}`;
      resultOfExpression = num1 - num2;
      break;
    case 1:
      expression = `${num1} + ${num2}`;
      resultOfExpression = num1 + num2;
      break;
    case 2:
      expression = `${num1} * ${num2}`;
      resultOfExpression = num1 * num2;
      break;
    default:
  }
  return [expression, resultOfExpression];
};

export const rule = 'What is the result of the expression?';
export const game = () => createExpression(getNum(), getNumForOperation(), getNum());
