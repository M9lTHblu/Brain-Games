
import readlineSync from 'readline-sync';


export default (rulesOfGame, questionGame, correctAnswer, maxAmountStepsOfGame) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello${name ? (`, ${name}`) : name}!`);
  console.log(rulesOfGame);
  let counter = maxAmountStepsOfGame;
  while (counter > 0) {
    const question = questionGame();
    console.log(`Question: ${question}`);
    const checkAnswerOfUser = correctAnswer(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!userAnswer) {
      return null;
    }
    if (checkAnswerOfUser === userAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${checkAnswerOfUser}" .Let's try again, ${name}`));
    }
    counter -= 1;
  }
  return (console.log(`Congratulations${name ? (`, ${name}`) : name}!`));
};
