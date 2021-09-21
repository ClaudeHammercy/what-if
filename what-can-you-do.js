const prompt = require('prompt-sync')();
const Age = Number(prompt('How old are you?  '));

if (Age <= 16) {
  console.log("You can't drive.");
} else if (Age <= 17) {
  console.log("You can drive but not vote.");
} else if (Age <= 24) {
  console.log("You can vote but not rent a car.");
} else if (Age >= 25) {
  console.log("You can do pretty much anything.")  
}