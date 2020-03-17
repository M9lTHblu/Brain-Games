
import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello${name ? `, ${name}` : name}!`);
  return name;
};

export default (gameRule, game) => {
  const name = greeting();
  console.log(gameRule);

  let counter = 3;
  while (counter > 0) {
    const gameProgress = game();
    console.log(`Question: ${gameProgress[0]}`);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (`${gameProgress[1]}` === usrAnswer) {
      console.log('Correct!')
    } else {
      return (console.log(`"${usrAnswer}" is wrong answer ;(. Correct answer was "${gameProgress[1]}".\nLet's try again ${name}!`));
    }
    counter -= 1;
  }
  return (console.log(`Congratulations${name ? `, ${name}` : name}!`));
};
