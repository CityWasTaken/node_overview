const fs = require('fs');



function spinWheel(showMenu) {
    fs.readFile('./names.txt', 'utf8', (error, data) => {
        if (error) {
            return console.log(error);
        }

        const names = data.replace(/\r/g, '').split('\n');
        let cycleAmount = 30;

        const cycle = setInterval(() => {
            const ranNum = Math.random();
            const index = Math.floor(ranNum * names.length);
            const number = names[index]

            console.clear();


            cycleAmount--;

            if (cycleAmount === 0) {
                clearInterval(cycle);

                console.log(`
                    ----------
                    ${number} You're up!
                    ----------`);

                showMenu();
            } else {
                console.log(number);
            }
        }, 75);
    });
}

module.exports = spinWheel;