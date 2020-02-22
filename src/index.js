
import readlineSync from 'readline-sync';

const welcome = readlineSync.question('May I have your name? ');


<<<<<<< HEAD
=======
export const meetUser = () => readlineSync.question('May I have your name? ');

export const sayHello = (name) => console.log(`Hello${name ? (', ' + name) : name}!`);

export const question = (value) => {
  console.log(`Question: ${value}`);
  return value;
};
export const termsOfGame = (str) => console.log(str);

export const userAnswer = () => readlineSync.question('Your answer: ');

export const checkAnswer = (value1, value2) => value1 === value2;


>>>>>>> dev
