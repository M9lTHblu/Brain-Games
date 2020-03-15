
import readlineSync from 'readline-sync';

export default (gameRule = null, game = null) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello${name ? `, ${name}` : name}!`);
  if (gameRule) {
    console.log(gameRule);
    let counter = 3;
    while (counter > 0) {
      const showGame = game();
      console.log(`Question: ${showGame[0]}`);
      const usrAnswer = readlineSync.question('Your answer: ');
      if (!usrAnswer) return null;
      if (`${showGame[1]}` === usrAnswer) console.log('Correct!');
      else {
        return (console.log(`"${usrAnswer}" is wrong answer ;(. Correct answer was "${showGame[1]}".\nLet's try again ${name}!`));
      }
      counter -= 1;
    }
    return (console.log(`Congratulations${name ? `, ${name}` : name}!`));
  }
  return null;
};
