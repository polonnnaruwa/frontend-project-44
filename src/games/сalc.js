import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

export const rule = 'What is the result of the expression?';

export const runBrainCalc = () => {
  let operationResult;
  let question;
  const operation = getRandomNumber(0, 2);
  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  switch (operation) {
    case 0:
      operationResult = number1 + number2;
      question = `Question: ${number1} + ${number2}`;
      break;

    case 1:
      operationResult = number1 - number2;
      question = `Question: ${number1} - ${number2}`;
      break;

    case 2:
      operationResult = number1 * number2;
      question = `Question: ${number1} * ${number2}`;
      break;

    default:
      console.log('default');
  }
  return [question, operationResult.toString()];
};

export const startGame = () => {
  runEngine(rule, runBrainCalc);
};
