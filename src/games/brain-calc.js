import readlineSync from 'readline-sync';
import { getRandomInt, message } from '../index.js';

const brainCalc = () => {
  const name = message();
  console.log('What is the result of the expression?');

  for (let i = 0; i < 3; i += 1) {
    let operationResult;
    const operation = getRandomInt(0, 2);
    const A = getRandomInt(1, 20);
    const B = getRandomInt(1, 20);
    switch (operation) {
      case 0:
        operationResult = A + B;
        console.log(`Question: ${A} + ${B}`);
        break;

      case 1:
        operationResult = A - B;
        console.log(`Question: ${A} - ${B}`);
        break;

      case 2:
        operationResult = A * B;
        console.log(`Question: ${A} * ${B}`);
        break;

      default:
        console.log('default');
    }
    const answer = readlineSync.question('Your answer: ');

    if (parseInt(answer, 10) === operationResult) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${operationResult}. Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default brainCalc;
