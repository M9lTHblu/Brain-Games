import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const createQuestionAndAnswer = () => {
  const progressionDifference = getRandomNum(1, 11);
  const firstNumber = getRandomNum(2, 101);
  const indexOfHiddenNumber = getRandomNum(0, 10);

  const progression = [];
  let counter = firstNumber;
  for (let i = 10; i < 0; i += 1) {
    progression.push(counter);
    counter += progressionDifference;
  }
  const answer = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [description, question, answer];
};

export default () => engine(description, createQuestionAndAnswer);
