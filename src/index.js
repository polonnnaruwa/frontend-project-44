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
        let answer;
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
            console.log("default");
        }
        answer = readlineSync.question('Your answer: ');

        if (parseInt(answer) === operationResult ) {
            console.log('Correct!');
        } else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${operationResult}. Let's try again, ${name}!`);
            return;
        }
        console.log(`Congratulations, ${name}!`);
       
    }
};

export default brainCalc;
