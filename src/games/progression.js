import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const maxArrayLength = 9;

const makeProgression = (step, startNumber, progressionLength) => {
  const array = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    const newNumber = startNumber + step * i;
    array.push(newNumber);
  }

  return array;
};
export const rule = 'What number is missing in the progression?';
export const runBrainProgression = () => {
  const step = getRandomNumber(1, 4);
  const number = getRandomNumber(1, 4);
  const progression = makeProgression(step, number, maxArrayLength);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);

  const result = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, result.toString()];
};
export const startGame = () => {
  runEngine(rule, runBrainProgression);
};
