const prompt = require('prompt-sync')();
const classSize = Number(prompt('How many students are in your class? '));
const groupSize = Number(3);


if (classSize % 3 === 0) {
    console.log(classSize / 3, 'groups of three');
}else if (classSize % 3 === 1) {
    const numGroups3 = (classSize - 4) / 3;
    const numGroups2 = 2;
    console.log(numGroups3, 'groups of three and ', numGroups2, 'groups of two.');
}else if (classSize % 3 === 2) {
    const numGroups3 = (classSize - 2) / 3;
    const numGroups2 = 1;
    console.log(numGroups3, 'groups of three and ', numGroups2, 'groups of two.');
    
}