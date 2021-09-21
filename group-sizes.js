const prompt = require('prompt-sync')();
const classSize = Number(prompt('How many students are in your class? '));
const groupSize = Number(prompt('How many students should be in each group? '));
const remainder = Number(classSize % groupSize);

console.log('Class Size: ', classSize);
console.log('Number of groups of 3: ', ((classSize - remainder) / groupSize));
console.log('Number of people not in groups: ', remainder);
if (remainder === 1) {
    console.log("We have 1 group of 1");
}else if (remainder === 2) {
    console.log("We have 1 group of 2");
}else if (remainder <= 3) {
    console.log("No short groups");
}