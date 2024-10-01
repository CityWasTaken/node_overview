const mathTools = {
    num1: 1,
    num2: 3,
    sum: () => {
    // sum: function(num1, num2) {
    // should return the sum of num1 and num2
    return this.num1 + this.num2;
    },
    difference: function() {
    // should return the difference of num1 and num2
    return this.num1 - this.num2;
    }
};

const resultSum = mathTools.sum();
const resultDifference = mathTools.difference();

console.log(resultSum);
console.log(resultDifference);


const date = new Date();







// function printName(userName) {
//     const capitalize = str => str[0].toUpperCase() + str.slice(1);

//     const capName = capitalize(userName);

//     console.log(capName);
    
// }

// printName('bob');