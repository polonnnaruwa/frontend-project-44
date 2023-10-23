import readlineSync from 'readline-sync';

export const message = () => {
    console.log("Welcome to the brain Games!")   
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;   
};

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min)) + min;
}
