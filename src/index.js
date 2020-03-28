
import readlineSync from 'readline-sync';

export default (game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello${name ? `, ${name}` : name}!`);
  const [rule] = game();
  console.log(rule);
  let counter = 3;
  while (counter > 0) {
    const [, question, answer] = game();
    console.log(`Question: ${question}`);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (`${answer}` === usrAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`"${usrAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again ${name}!`));
    }
    counter -= 1;
  }
  return (console.log(`Congratulations${name ? `, ${name}` : name}!`));
};
