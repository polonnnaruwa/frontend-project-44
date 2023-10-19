import readlineSync from 'readline-sync';
import message from './cli.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min)) + min;
}

const brainCalc = () => {
    const name = message();
    console.log('What is the result of the expression?');

    for (let i = 0; i < 3; i += 1) {
        let A, B, answer;
        const operation = getRandomInt(0, 2);
        switch (operation) {
        case 0: 
            A = getRandomInt(1, 20);
            B = getRandomInt(1, 20);
            const sum = A + B;

            console.log(`Question: ${A} + ${B}`);

            answer = readlineSync.question('Your answer: ');

            if (parseInt(answer) === sum ) {
                console.log('Correct!');
            } else {
                console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}. Let's try again, ${name}!`);
                return;
            }
            console.log(`Congratulations, ${name}!`);
            break;

        case 1: 
            A = getRandomInt(1, 20);
            B = getRandomInt(1, 20);
            const subtraction = A - B;

            console.log(`Question: ${A} - ${B}`);

            answer = readlineSync.question('Your answer: ');

            if (parseInt(answer) === subtraction) {
                console.log('Correct!');
            } else {
                console.log(`${answer} is wrong answer ;(. Correct answer was ${subtraction}. Let's try again, ${name}!`);
                return;
            }
            console.log(`Congratulations, ${name}!`);
            break;

        case 2:
            A = getRandomInt(1, 20);
            B = getRandomInt(1, 20);
            const multiplication = A * B;
    
            console.log(`Question: ${A} * ${B}`);
    
            answer = readlineSync.question('Your answer: ');
    
            if (parseInt(answer) === multiplication) {
                console.log('Correct!');
            } else {
                console.log(`${answer} is wrong answer ;(. Correct answer was ${multiplication}. Let's try again, ${name}!`);
                return;
            }
            console.log(`Congratulations, ${name}!`);
            break;
        default:
            console.log("default");
        }
       
    }
};

export default brainCalc;
