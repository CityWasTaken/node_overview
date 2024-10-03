import inquirer from "inquirer";

import createMarkdown from "./createMarkdown.js";

async function mainMenu () {
// show an option to create a markdown file
    const menuPromise = await inquirer.prompt({
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create Markdown File', 'Exit']
    });

    switch(menuPromise.menuChoice) {
        case 'Create Markdown File':
            createMarkdown();
            break;
        default:
            console.log('\nThanks for using the markdown Generator!');
            
    }



// show an option to exit the application
    
}

export default mainMenu;