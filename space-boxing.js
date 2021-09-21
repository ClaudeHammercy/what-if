const prompt = require('prompt-sync')();
const earthWeight = Number(prompt('Enter your Earth weight (in numbers only): '));

console.log('Earth Weight: ', earthWeight, 'lbs');
console.log('Here is a list of fight destinations: ','1. Venus ','2. Mars' ,'3. Jupiter ','4. Saturn ','5. Uranus ','6. Neptune');

const planet = Number(prompt('Enter the number that corresponds to your destination. '));

if (planet === 1) {
    const result = earthWeight * 0.78;
    console.log('Your weight on Venus is ', result, 'lbs.');
}
if (planet === 2) {
    const result = earthWeight * 0.39;
    console.log('Your weight on Mars is ', result, 'lbs.');
}
if (planet === 3) {
    const result = earthWeight * 2.65;
    console.log('Your Jupiter on Venus is ', result, 'lbs.');
}
if (planet === 4) {
    const result = earthWeight * 1.17;
    console.log('Your weight on Jupiter is ', result, 'lbs.');
}
if (planet === 5) {
    const result = earthWeight * 1.05;
    console.log('Your weight on Uranus is ', result, 'lbs.');
}
if (planet === 6) {
    const result = earthWeight * 1.23;
    console.log('Your weight on Neptune is ', result, 'lbs.');
}
