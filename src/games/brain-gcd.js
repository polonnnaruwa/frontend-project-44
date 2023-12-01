import readlineSync from 'readline-sync';
import { getRandomNumber, message, nod } from '../index.js';

const runBrainGcd = () => {
  const name = message();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const x = getRandomNumber(1, 100);
    const y = getRandomNumber(1, 100);
    console.log(`Question: ${x} ${y}`);
    const result = nod(x, y);

    const answer = readlineSync.question('Your answer: ');

    if (parseInt(answer, 10) === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};
export default runBrainGcd;
