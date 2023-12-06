import readlineSync from 'readline-sync';

const maxNumberOfQuestion = 3;
export const message = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};
const runEngine = (rule, generateRound) => {
  const name = message();

  console.log(rule);

  for (let i = 0; i < maxNumberOfQuestion; i += 1) {
    const correctAnswer = generateRound();
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default runEngine;
