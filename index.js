const fruits = ["orange", "apple", "grape",]
const fruits2 = ["kiwi", "banana", "strawberry"]

const combinedFruits = {...fruits, ...fruits2};

const data = {
    name: "JD",
    age: 44
};

const data2 = {
    name: "Bob",
    age: 99
}


const combinedData = {
    ...data,
    address: "555 coding dr",
    phone: "777-777-7777"
};

console.log(combinedData);


function printNames(names) {
    for (const name of names) {
        console.log(name);
        
    }
}


// printNames('Bob', "Jane", "Frank", "Jill", "Billy");
printNames('Jake', "Bill");