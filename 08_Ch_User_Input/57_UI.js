/*    --- Using prompt() — Browser
The prompt() function displays a popup asking the user to enter a value.

Imp:  prompt() works in a browser environment. It does not work directly in 
      a standard Node.js terminal in VS Code.
*/

let num = prompt("Enter a number:");
num = Number(num);  // convert string to number

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}