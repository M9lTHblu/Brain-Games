import readlineSync from 'readline-sync';

export default () => {
  const userName = readlineSync.question('May I have your name? ');
  const noName = 'anonymous';
  return (userName ? console.log(`Hello, ${userName}!`) : console.log(`Hello, ${noName}!`));
};
