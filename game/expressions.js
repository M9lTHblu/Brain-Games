
export const evenNumbersGame = (coll, name) => {
  console.log('What is the result of the expression?');
  const sizeColl = coll.length;
  for (let i = 0; i < sizeColl; i += 1) {
    const num1 = coll[i];
    const num2 = coll[i + 1];
    const check = num % 2 === 0 ? 'yes' : 'no';
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if (answer === check) {
      console.log('Correct!');
    } else {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}`);
      process.exit();
    }
  }
  return console.log(`Congratulations, ${name}!`);
};