// Turn your function into an async function so you can add await on your inner promises

function createMarkdown() {
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

    console.log('mark down');
}

export default createMarkdown;