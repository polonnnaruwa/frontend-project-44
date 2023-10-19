import readlineSync from 'readline-sync';
import message from './cli.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const brainCalc = () => {
    const name = message();
    console.log('What is the result of the expression?');

    for (let i = 0; i < 1; i += 1) {
        let A = getRandomInt(1, 20);
        let B = getRandomInt(1, 20);
        const sum = A + B;

        console.log(`Question: ${A} + ${B}`);

        let answer = readlineSync.question('Your answer: ');

        if (parseInt(answer) === sum ) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}. Let's try again, ${name}!`);
            return;
        }
    console.log(`Congratulations, ${name}!`);
    }
    
    for (let i = 0; i < 1; i += 1) {
        let A = getRandomInt(1, 20);
        let B = getRandomInt(1, 20);
        const subtraction = A - B;

        console.log(`Question: ${A} - ${B}`);

        let answer = readlineSync.question('Your answer: ');

        if (parseInt(answer) === subtraction) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${subtraction}. Let's try again, ${name}!`);
            return;
        }
    console.log(`Congratulations, ${name}!`);
    }
    
    for (let i = 0; i < 1; i += 1) {
        let A = getRandomInt(1, 20);
        let B = getRandomInt(1, 20);
        const multiplication = A * B;

        console.log(`Question: ${A} * ${B}`);

        let answer = readlineSync.question('Your answer: ');

        if (parseInt(answer) === multiplication) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${multiplication}. Let's try again, ${name}!`);
            return;
        }
    console.log(`Congratulations, ${name}!`);
    }
};

export default brainCalc;
