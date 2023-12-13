import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

const isEven = (number) => number % 2 === 0;

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const runBrainEvenGame = () => {
  const randomNumber = getRandomNumber(1, 20);
  const question = `Question: ${randomNumber}`;
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export const startGame = () => {
  runEngine(rule, runBrainEvenGame);
};
