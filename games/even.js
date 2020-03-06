
import { engine } from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const showQuestion = () => Math.floor(Math.random() * (100 - 2) + 2);

const getAnswer = (value) => {
  const result = (value % 2 === 0) ? 'yes' : 'no';
  return result;
};


export default () => engine(rule, showQuestion, getAnswer);
