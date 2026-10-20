/*A nested if...else statement means writing one if...else statement 
inside another if or else block.
It is useful when you need to check a second condition only after 
checking the first condition

*/


let age = 27
if (age > 18) {
    console.log("Goa Check!");
    if (age > 26) {
        console.log("Drink and Goa");
    } else {
        console.log("Only Goa, no Drink");
    }
}
else {
    console.log("No Goa");
}


// Eg 2: Simple Example – Student Pass or Fail
/*  Requirement:
- If marks are 40 or above, the student passes.
- If the student passes and scores 80 or above, print "Distinction".
- If the student passes but scores below 80, print "Pass".
- Otherwise, print "Fail".
*/

let marks = 85;

if (marks >= 40) {

    if (marks >= 80) {
        console.log("Distinction");
    } else {
        console.log("Pass");
    }

} else {
    console.log("Fail");
}
