import readlineSync from 'readline-sync';

const roundsCount = 3;

const runEngine = (rule, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(rule);

  for (let i = 0; i < roundsCount; i += 1) {
    const questionAndAnswer = generateRound();
    const question = questionAndAnswer[0];
    console.log(`Question: ${question}`);
    const correctAnswer = questionAndAnswer[1];
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
export default runEngine;
