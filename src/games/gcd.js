import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

function getGcd(x, y) {
  let newX = Math.abs(x);
  let newY = Math.abs(y);
  while (newY) {
    const t = newY;
    newY = newX % newY;
    newX = t;
  }
  return newX;
}
export const rule = 'Find the greatest common divisor of given numbers.';
export const runBrainGcd = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const result = getGcd(number1, number2);

  return [question, result.toString()];
};
export const startGame = () => {
  runEngine(rule, runBrainGcd);
};
