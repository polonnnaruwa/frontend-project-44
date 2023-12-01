import readlineSync from 'readline-sync';
import { getRandomNumber, message } from '../index.js';

const makeProgression = (step, number) => {
  const array = [number];
  let newNumber = number;

  for (let i = 0; i <= 9; i += 1) {
    newNumber += step;
    array.push(newNumber);
  }

  return array;
};

const runBrainProgression = () => {
  const name = message();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const step = getRandomNumber(1, 4);
    const number = getRandomNumber(1, 4);
    const array = makeProgression(step, number);
    const index = getRandomNumber(0, 9);

    const result = array[index];
    array[index] = '..';
    const strArray = array.join(' ');

    console.log(`Question: ${strArray}`);

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

export default runBrainProgression;
