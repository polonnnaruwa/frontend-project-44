import readlineSync from 'readline-sync';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    let random = getRandomInt(1, 20);
    console.log(`'Question:'${random}`);

    let answer = readlineSync.question('Your answer:');
         
    if (isEven(random) && answer === 'yes' ) {
        console.log('Correct!');
    }
    else if (!isEven(random) && answer === 'no') {
        console.log('Correct!');
    }
    else if (!isEven(random) && answer === 'yes') {
        console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, Bill!');
        return; 
    }
    else if (isEven(random) && answer === 'no') {
        console.log('"no" is wrong answer ;(. Correct answer was "yes". Let\'s try again, Bill!');
        return;
    }
 
    random = getRandomInt(1, 20);
    console.log(`'Question:'${random}`);

    answer = readlineSync.question('Your answer:');
         
    if (isEven(random) && answer === 'yes' ) {
        console.log('Correct!');
    }
    else if (!isEven(random) && answer === 'no') {
        console.log('Correct!');
    }
    else if (!isEven(random) && answer === 'yes') {
        console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, Bill!');
        return; 
    }
    else if (isEven(random) && answer === 'no') {
        console.log('"no" is wrong answer ;(. Correct answer was "yes". Let\'s try again, Bill!');
        return;
    }

    random = getRandomInt(1, 20);
    console.log(`'Question:'${random}`);

    answer = readlineSync.question('Your answer:');
         
    if (isEven(random) && answer === 'yes' ) {
        console.log('Correct!');
    }
    else if (!isEven(random) && answer === 'no') {
        console.log('Correct!');
    }
    else if (!isEven(random) && answer === 'yes') {
        console.log('"yes" is wrong answer ;(. Correct answer was "no". Let\'s try again, Bill!');
        return; 
    }
    else if (isEven(random) && answer === 'no') {
        console.log('"no" is wrong answer ;(. Correct answer was "yes". Let\'s try again, Bill!');
        return;
    }
    console.log('Congratulations, Bill!');
};
export default brainEvenGame;
