import {getRandomInt, message} from '../index.js';
import readlineSync from 'readline-sync';
import {nod} from '../index.js';

const brainGcd = () => {
    const name = message();
    console.log('Find the greatest common divisor of given numbers.');
    
    for (let i = 0; i < 3; i += 1) {
        let answer;
        const x = getRandomInt(1, 100);
        const y = getRandomInt(1, 100);
        console.log(`'Question:'${x} ${y}`);
        let result = nod(x, y);
        
        answer = readlineSync.question('Your answer: ');

        if (parseInt(answer) === result ) {
        console.log('Correct!');
        } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${name}!`);
        return;
        }
        console.log(`Congratulations, ${name}!`);
    }
};
export default brainGcd;