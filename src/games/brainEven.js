import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const runBrainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 20);
  console.log(`Question: ${randomNumber}`);

  if (isEven(randomNumber)) {
    return 'yes';
  }
  return 'no';
};
