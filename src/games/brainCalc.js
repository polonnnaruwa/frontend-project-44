import getRandomNumber from '../utils.js';

export const rule = 'What is the result of the expression?';

export const runBrainCalc = () => {
  let operationResult;
  const operation = getRandomNumber(0, 2);
  const A = getRandomNumber(1, 20);
  const B = getRandomNumber(1, 20);
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
  return operationResult.toString();
};
