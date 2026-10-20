/* ----------  Taking a number as input  ------------

Suppose you want to ask the user for two numbers and add them.

*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter first number: ", function(a) {
    rl.question("Enter second number: ", function(b) {
        let sum = Number(a) + Number(b);

        console.log("Sum = " + sum);
        rl.close();
    });
});


/*    Which method should you use?
Where you run JavaScript	                      Input method
  Browser	                                         prompt()
  VS Code terminal using Node.js	                  readline
  Coding platforms that provide standard input	     fs.readFileSync(0, "utf8")

*/