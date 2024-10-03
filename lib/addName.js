const fs = require('fs');
const inquirer = require('inquirer');



function addName(showMenu) {
    const studentPromise = inquirer.prompt({
        message: 'Please enter new student name',
        name: 'studentName'
    });

    studentPromise.then((answerObj) => {
        fs.appendFile('./names.txt', '\n' + answerObj.studentName, (error) => {
            if (error) {
                return console.log(error);
            }
    
    
            console.log('Name added successfully!\n-----------');
            showMenu();
        });
    });
    

}

module.exports = addName;