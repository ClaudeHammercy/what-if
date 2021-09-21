const prompt = require('prompt-sync')();
const ClassSize = Number(prompt('How many students are in your class? '));
const GroupSize = Number(prompt('How many students should be in each group? '));
const Remainder = Number(ClassSize % GroupSize);


console.log('Class Size: ', ClassSize);
console.log('Number of groups of 3: ', ((ClassSize - Remainder) / GroupSize));
console.log('Number of people not in groups: ', Remainder);

if (Remainder === 1) {
    console.log("We have 1 group of 1");
}else if (Remainder === 2) {
    console.log("We have 1 group of 2");
}else if (Remainder < 3) {
    console.log("No short groups");
} 