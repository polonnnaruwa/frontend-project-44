import readlineSync from 'readline-sync';

export const message = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export function getRandomNumber(min, max) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  return Math.round(Math.random() * (newMax - newMin)) + newMin;
}
