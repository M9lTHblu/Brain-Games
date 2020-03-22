import { getRandomNum } from '../math.js';

const isPrime = (number) => {
  let result = 0;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) result += i;
  }
  return number === result;
};

const getQuestionAndAnswer = (question) => {
  const answer = question ? 'yes' : 'no';
  return [question, answer];
};

export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const game = () => getQuestionAndAnswer(isPrime(getRandomNum(2, 101)));
