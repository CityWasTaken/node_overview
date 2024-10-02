const { log } = require('console');
const fs = require('fs');
const { clearInterval } = require('timers');
const command = process.argv[2];
const studentName = process.argv[3]


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

function welcomeMessage() {
    console.log(`
        --------
        Welsome to the Randome Name Wheel!
        
        To use this app, type in one of the options:
        -spin -- This will spin the wheel
        -add -- This adds a name to the list
        
        -------
        `);
    
}


switch(command) {
    case 'add':
        addName();
        break;
    case 'spin':
        spinWheel();
} 


// if (command === 'add') {
//     addName();
// } else if (command === 'spin'){
//     spinWheel();
// }

// spinWheel();