// Turn your function into an async function so you can add await on your inner promises
import {promises as fs} from 'fs';
import inquirer from "inquirer";


async function createMarkdown() {
  const answersObj = await inquirer.prompt([
    {
      message: 'Please enter your Full Name',
      name: 'fullName'
    },
    {
      message: 'What is your address?',
      name: 'address'
    },
    {
      message: 'What is your phone number?',
      name: 'phoneNumber'
    },
    {
      message: 'What are your favorite food?',
      name: 'foodCategories',
      type: 'checkbox',
      choices: ['American', 'Chinese', 'Thai', 'Mexican']
    }

  ]);

const faveFoods = answersObj.foodCategories.map((foodStr) => {
  return '-${foodStr}\n'
});

const info = `
## Full Name: ${answersObj.fullName}
- Phone: ${answersObj.phoneNumber}
- Address: ${answersObj.address}
- Favorite Foods:
<details>
${faveFoods.join('')}
</details>
`;


await fs.writeFile('details.md', info);

  console.log('Markdown file generated successfully!\n________');
}
 /* 
  Create a chain of prompts that ask the user for some details - Their full name, their phone number and their address and their favorite food category from a list of choices

  Use await on the prompt to get the answersObj

  Once you have the answersObj, you will use the fs module/package to write a .md file named details.md. The data for that file will be a template string that looks like this

  `
  Full Name: USER_NAME
  Phone: PHONE_NUMBER
  Address: ADDRESS
  Favorite Food: FAV_FOOD_THEY_SELECTED
  `

  With the writeFile method on fs, you pass in the data string as the second argument
  */


export default createMarkdown;