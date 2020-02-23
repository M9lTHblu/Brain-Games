
import engine from '../src/index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const correctAnswer = (value) => {
  const answer = (value % 2 === 0) ? 'yes' : 'no';
  return answer;
};


function genRandomNum() {
  let b = 0;
  const a = Math.floor(((Math.random() * 100) / 2) + (Math.random()));
  if (b === a) {
    b += a;
  } else { b = a; }
  return b;
}

export default () => engine(rules, genRandomNum, correctAnswer, 3);
