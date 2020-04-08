
import readlineSync from 'readline-sync';

export default (description, game) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);

  let counter = 0;
  while (counter < 3) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const usrAnswer = readlineSync.question('Your answer: ');

    if (`${answer}` !== usrAnswer) {
      console.log(`"${usrAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again ${name}!`);
      return;
    }
    if (`${answer}` === usrAnswer) {
      console.log('Correct!');
      counter += 1;
    }
  }
  console.log(`Congratulations, ${name}`);
};
