import { getRandomNumber } from '../utils.js';

function nod(x, y) {
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
  const x = getRandomNumber(1, 100);
  const y = getRandomNumber(1, 100);
  console.log(`Question: ${x} ${y}`);
  const result = nod(x, y);

  return result.toString();
};
