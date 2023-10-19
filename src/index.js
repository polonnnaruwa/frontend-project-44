import readlineSync from 'readline-sync';
import message from './cli.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const sum = A + B;

const brainCalc = () => {
    const name = message();
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i += 1) {
        let A = getRandomInt(1, 20);
        let B = getRandomInt(1, 20);
        console.log(`'Question:'${A} + ${B}`);

        let answer = readlineSync.question('Your answer:');

        if (sum(random) && answer === 'sum' ) {
            console.log('Correct!');
        }
        else if (sum(random) && answer === '!sum') {
            console.log(`"!sum" is wrong answer ;(. Correct answer was "sum". Let's try again, ${name}!`);
            return;
        }
    console.log(`Congratulations, ${name}!`);
    }

};
export default brainCalc;
