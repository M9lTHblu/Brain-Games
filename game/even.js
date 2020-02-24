
import { engine } from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (value) => {
  const result = (value % 2 === 0) ? 'yes' : 'no';
  return result;
};
const question = () => Math.floor(Math.random() * (100 - 2) + 2);


export default () => engine(rules, question, isEven);
