import readlineSync from 'readline-sync';
const message = () => {
    console.log("Welcome to the brain Games!")   
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;   
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min)) + min;
}
export default message;