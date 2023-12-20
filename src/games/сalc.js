import getRandomNumber from '../utils.js';
import runEngine from '../index.js';

export const rule = 'What is the result of the expression?';

const runOperation = (sign, number1, number2) => {
  switch (sign) {
    case '+':
      return number1 + number2;

    case '-':
      return number1 - number2;

    case '*':
      return number1 * number2;

    default:
      throw new Error(`Unknown sign: '${sign}'!`);
  }
};

export const runBrainCalc = () => {
  const signs = '+-*';
  const signIndex = getRandomNumber(0, signs.length - 1);
  const sign = signs[signIndex];

  const number1 = getRandomNumber(1, 20);
  const number2 = getRandomNumber(1, 20);
  const answer = runOperation(sign, number1, number2);

  const question = `${number1} ${sign} ${number2}`;

  return [question, answer.toString()];
};

export const startGame = () => {
  runEngine(rule, runBrainCalc);
};
