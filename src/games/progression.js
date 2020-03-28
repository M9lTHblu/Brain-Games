import engine from '../index.js';
import getRandomNum from '../utils.js';

const description = 'What number is missing in the progression?';

const createQuestionAndAnswer = () => {
  const progressionDifference = getRandomNum(1, 11);
  const indexOfHiddenNumber = getRandomNum(0, 10);

  const progression = [];
  for (let i = 2; progression.length < 10; i += 1) {
    progression.push(i * progressionDifference);
  }
  const answer = progression[indexOfHiddenNumber];
  progression[indexOfHiddenNumber] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => engine(description, createQuestionAndAnswer);
