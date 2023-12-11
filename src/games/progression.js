import getRandomNumber from '../utils.js';

const maxArrayLength = 9;

const makeProgression = (step, startNumber) => {
  const array = [];
  for (let i = 0; i <= maxArrayLength; i += 1) {
    const newNumber = startNumber + step * i;
    array.push(newNumber);
  }

  return array;
};
export const rule = 'What number is missing in the progression?';
export const runBrainProgression = () => {
  const step = getRandomNumber(1, 4);
  const number = getRandomNumber(1, 4);
  const array = makeProgression(step, number);
  const index = getRandomNumber(0, maxArrayLength);

  const result = array[index];
  array[index] = '..';
  const strArray = array.join(' ');

  console.log(`Question: ${strArray}`);
  return result.toString();
};
