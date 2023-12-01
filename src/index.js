import readlineSync from 'readline-sync';

export const message = () => {
  console.log('Welcome to the brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export function getRandomInt(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.round(Math.random() * (newMax - newMin)) + newMin;
}

export function nod(x, y) {
  let newX = Math.abs(x);
  let newY = Math.abs(y);
  while (newY) {
    const t = newY;
    newY = newX % newY;
    newX = t;
  }
  return newX;
}
