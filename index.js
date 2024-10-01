const nums = [16, 4, 32, 12, 11, 50, 9]
const users = [
    {
        name: 'Bob',
        age: 99
    },
    {
        name: "Mike",
        age: 27
    },
    {
        name: "Jax",
        age: 30
    }
];


const students = [
    {
      name: 'Roman',
      average: 99
    },
    {
      name: 'Matt',
      average: 80
    },
    {
      name: 'Izzy',
      average: 95
    },
    {
      name: 'Kandyce',
      average: 90
    }
  ]



const overallAverage = students.reduce((output, studentObj, index, arr) => {
    // if we are on the last student, return the output divided by the arr length
    if (index === arr.length - 1) {
        return (output + studentObj.average) / arr.length;
    }
    // otherwise, return output + the suserObj's avg
    return output + studentObj.average;
}, 0);

console.log(overallAverage);


const studentInfo = students.reduce((output, studentObj, index, arr) => {
    output.overallAverage += studentObj.average;

    if (index === arr.length - 1) {
        output.overallAverage = (output.overallAverage + studentObj.average) / arr.length;
    }

    
    output.studentCount = arr.length;

    return output
}, {
    overallAverage: 0,
    studentInfo: 0

});

console.log(studentInfo);


// let total = 0;

// for (const studentObj of students) {
//     total += studentObj.average;
// }

// const overall = total / students.length

// const sum = nums.reduce((output, num) => {
//     return output + num
// }, 0);

// console.log(sum);







const evenArray = nums.map((num) => {
    if ((num % 2) === 0) {
        return `${num} is even`
    } else {
        return `${num} is odd`
    }
});


// console.log(evenArray);





// nums.forEach((num) => {
//     console.log(num);
// });


// for (const num of nums) {
//     if (num > 10) {
//         break;
//     }
//     console.log(num);
// }



// Filtering  out values/items

const filteredNums = nums.filter((num) => {
    if (num > 10) {
        return true;
    }
});

const filteredUsers = users.filter((userObj) => {
    if (userObj.age > 30) {
        return true
    }
});

// console.log(filteredUsers);


// console.log(filteredNums);



// Sorting Algorithm
// Algorithm challenge - Write a function that orders the array numbers from lowest to highest
const sorted = nums.sort((currentNum, nextNum) => {
    return currentNum - nextNum;
});

// create a variable that stores a sorted userArray. In your callback function, return the difference between the current object's age and the next objects age

const userAge = users.sort((firstUser, lastUser) => {
    return firstUser.age - lastUser.age;
});

// create a variable that stores the sorted users array and sorts the objects by name - hint (all letter characters have a number value that you can pull with JS)

// console.log(userAge);

// console.log(sorted);
