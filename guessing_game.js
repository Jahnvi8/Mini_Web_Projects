const ps = require('prompt-sync');
const prompt = ps();

let max = parseInt(prompt("Enter your maximum value"));
while (!max) {
    max = prompt("Enter a valid number"); 
}

const targetNum = Math.floor(Math.random() * max) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Enter your guess"));
let attempts = 1;
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high, guess again");
    } else {
        guess = prompt("Too low guess again");
    }
}
if (guess === 'q') {
    console.log("you quit");
} else {
    console.log(`you took ${attempts} guesses`);
}
