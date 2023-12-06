import { getRandomNumber } from '../utils.js';

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
export const rule = 'Answer "yes" if the number is prime, otherwise answer "no".';
export const runBrainPrime = () => {
  const number = getRandomNumber(1, 20);
  console.log(`Question: ${number}`);
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};
