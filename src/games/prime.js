import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

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
export const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
export const runBrainPrime = () => {
  const number = getRandomNumber(1, 20);
  console.log(`Question: ${number}`);
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};
export const startGame = () => {
  runEngine(rule, runBrainPrime);
};
