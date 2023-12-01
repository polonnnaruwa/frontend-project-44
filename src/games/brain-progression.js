import readlineSync from 'readline-sync';
import { getRandomInt, message } from '../index.js';

const makeProgression = () => {
  const step = getRandomInt(1, 4);
  let number = getRandomInt(1, 4);
  const array = [number];

  for (let i = 0; i <= 9; i += 1) {
    number += step;
    array.push(number);
  }

  return array;
};

const brainProgression = () => {
  const name = message();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const array = makeProgression();
    const index = getRandomInt(0, 9);

    const result = array[index];
    array[index] = '..';

    console.log(`Question: ${array}`);

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

export default brainProgression;
