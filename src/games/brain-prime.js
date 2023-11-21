import {getRandomInt, message} from '../index.js';
import readlineSync from 'readline-sync';

const isPrime = (n) => {
    if (n===1)  {
        return false;
    } else {
        for(let x = 2; x < n; x++)  {
        if(n % x === 0) {
            return false;
        }
        }
        return true;  
    }
};

const brainPrime = () => {
    const name = message();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
    
    for (let i = 0; i < 3; i += 1) {
        const number = getRandomInt(1, 20);
        console.log(`Question: ${number}`);

        const result = isPrime(number);
        
        const answer = readlineSync.question('Your answer: ');

        const isYes = 'yes' === answer;
        const correctAnswer = (answer === result) ? 'yes' : 'no';

        if (result === isYes ) {
        console.log('Correct!');
        } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${name}!`);
        return;
        }
        console.log(`Congratulations, ${name}!`);
    }
};
export default brainPrime;


