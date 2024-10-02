const { log } = require('console');
const fs = require('fs');
const { clearInterval } = require('timers');

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

spinWheel();