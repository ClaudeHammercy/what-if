const prompt = require('prompt-sync')();
const input = Number(prompt('Enter a number.  '));

if (input % 15 === 0) {
    console.log('FIZZBUZZ');
} else if (input % 5 === 0) {
    console.log('BUZZ');
} else if (input % 3 === 0) {
    console.log('FIZZ');
} 