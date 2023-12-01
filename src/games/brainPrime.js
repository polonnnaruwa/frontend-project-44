import readlineSync from 'readline-sync';
import { getRandomNumber, message } from '../index.js';

const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let x = 2; x < n; x += 1) {
    if (n % x === 0) {
      return false;
    }
  }
  return true;
};

const runBrainPrime = () => {
  const name = message();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(1, 20);
    console.log(`Question: ${number}`);

    const result = isPrime(number);

    const answer = readlineSync.question('Your answer: ');

    const isYes = answer === 'yes';
    const correctAnswer = (answer === result) ? 'yes' : 'no';

    if (result === isYes) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default runBrainPrime;
