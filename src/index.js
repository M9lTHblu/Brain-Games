
import readlineSync from 'readline-sync';

export const greeting = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello${name ? (`, ${name}`) : name}!`);
};


export const engine = (rule, showQuestion, getAnswer) => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello${name ? `, ${name}` : name}!`);
  console.log(rule);
  let counter = 3;
  while (counter > 0) {
    const question = showQuestion();
    console.log(`Question: ${question}`);
    const correctAnswer = getAnswer(question);
    const usrAnswer = readlineSync.question('Your answer: ');
    if (!usrAnswer) {
      return null;
    }
    if (String(correctAnswer) === usrAnswer) {
      console.log('Correct!');
    } else {
      return (console.log(`"${usrAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again ${name}!`));
    }
    counter -= 1;
  }
  return (console.log(`Congratulations${name ? `, ${name}` : name}!`));
};
