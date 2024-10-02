const fs = require('fs');
const inquirer = require('inquirer');


function spinWheel() {
    fs.readFile('./names.txt', 'utf8', (error, data) => {
        if (error) {
            return console.log(error);
        }

        const names = data.replace(/\r/g, '').split('\n');
        let cycleAmount = 30;

        const cycle = setInterval(() => {
            const ranNum = Math.random();
            const index = Math.floor(ranNum * names.length);

            console.clear();


            cycleAmount--;

            if (cycleAmount === 0) {
                clearInterval(cycle);

                console.log(`${names[index]} You're up!`);

                showMenu()
            } else {
                console.log(names[index]);
            }
        }, 75);
    });
}


function addName() {
    fs.writeFile('./names.txt', studentName, (error) => {
        if (error) {
            return console.log(error);
        }


        console.log('Name added successfully!');
    });
}

function showMenu() {
    console.log(`
        --------
        Welsome to the Random Name Wheel!  
        -------

        `);

    const menuPromise = inquirer.prompt({
        message: 'Please choose an option',
        name: 'menuChoice', //This determines the answerObj's property that this answer will be stored to
        type: 'list',
        choices: ['Spin the Wheel', 'Add a student']
    });

    menuPromise.then((answerObj) => {
        switch (answerObj.menuChoice) {
            case 'Add a student':
                addName();
                break;
            case 'Spin the Wheel':
                spinWheel();
        }
    });

}


showMenu();

// if (command === 'add') {
//     addName();
// } else if (command === 'spin'){
//     spinWheel();
// }

// spinWheel();