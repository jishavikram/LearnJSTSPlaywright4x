/*In JavaScript, multiple if...else statements allow you to check several 
conditions and execute different blocks of code depending on the result.

There are two common ways to do this:
1. Multiple independent if...else statements.
2. An if...else if...else chain.
*/

/*1. Multiple independent if...else statements
  
You can write more than one if...else statement in the same program. 
Each statement checks its condition independently. */

//Example: Age eligibility

let age = 25;

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

if (age >= 21) {
    console.log("Eligible to drive (example rule)");
} else {
    console.log("Not eligible under this example rule");
}

if (age >= 25) {
    console.log("Age is 25 or above");
} else {
    console.log("Age is below 25");
}