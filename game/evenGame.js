import {meetUser, sayHello, termsOfGame, question, userAnswer, checkAnswer} from '../src/index.js';


const name = meetUser();

const generateRandomNum = () => {
	let b = 0;
	const a = Math.floor(((Math.random() * 100) / 2) + (Math.random()));
	return b === a ? b += a : b = a;
};

export const game = (amount = 3, steps = 0) => {
  sayHello(name);
  termsOfGame('is even? yes/no?');
  while (steps < amount) {
    const gameAnswer = (question(generateRandomNum()) % 2 === 0) ? 'yes' : 'no';
    console.log(gameAnswer);
    checkAnswer(gameAnswer, userAnswer()) ? console.log('Correct!') : process.exit();
    steps += 1;
  }
  return console.log(`congratulations${name ? (', ' + name) : name}!`);
};

