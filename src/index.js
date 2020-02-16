
import readlineSync from 'readline-sync';


// This function asks for a name from the user, otherwise the user gets an anonymous name.
export function getName() {
  let askName = readlineSync.question('May I have your name? ');
  const noName = 'anonymous';
  if (askName) {
    console.log(`Hello, ${askName}!`);
  } else {
    askName = noName;
    console.log(`Hello, ${askName}!`);
  }
  return askName;
}

// game
export function game(coll, name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const sizeColl = coll.length;
  for (let i = 0; i < sizeColl; i += 1) {
    const num = coll[i];
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
}

// This function saves username
export const saveName = (value) => (value || 'anonymous');

// This function generates random numbers ('items' == total elements in returned array)
export function generateRandomNum(items = 3) {
  const returnedtArray = [];
  while (returnedtArray.length < items) {
    const generator = Math.floor((Math.random() * 100) / 2) + 2;
    if (returnedtArray.includes(generator)) continue;
    returnedtArray.push(generator);
  }
  return returnedtArray;
}
