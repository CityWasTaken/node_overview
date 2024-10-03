import inquirer from "inquirer";

function mainMenu () {
// show an option to create a markdown file
    const menuPromise = inquirer.prompt({
        message: 'Please select an option',
        name: 'menuChoice',
        type: 'list',
        choices: ['Create Markdown File', 'Exit']
    });

    menuPromise.then(() => {
        
    });



// show an option to exit the application
    
}

export default mainMenu;