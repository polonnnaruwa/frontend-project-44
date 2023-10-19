import readlineSync from 'readline-sync';
const message = () => {
    console.log("Welcome to the brain Games!")   
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;   
};
export default message;

