import readlineSync from 'readline-sync';
import { getRandomInt, message } from '../index.js';

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
  const name = message();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const random = getRandomInt(1, 20);
    console.log(`Question: ${random}`);

    const answer = readlineSync.question('Your answer:');

    if (isEven(random) && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven(random) && answer === 'no') {
      console.log('Correct!');
    } else if (!isEven(random) && answer === 'yes') {
      console.log(`"yes" is wrong answer ;(. Correct answer was "no". Let's try again, ${name}!`);
      return;
    } else if (isEven(random) && answer === 'no') {
      console.log(`"no" is wrong answer ;(. Correct answer was "yes". Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
export default brainEvenGame;
