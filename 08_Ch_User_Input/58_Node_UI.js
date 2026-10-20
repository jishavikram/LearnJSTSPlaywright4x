/*  ------ Using readline — Node.js / VS Code terminal ---------

To accept input from the terminal, you can use Node.js's built-in readline module.

*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", (input) => {
       let num = Number(input);

    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }

    rl.close(); 

});