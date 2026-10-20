/*  -------- Switch statement --------

switch statement is used to execute different blocks of code based 
on the value of a variable or expression.  
It is often an alternative to writing multiple if...else if statements 
when you want to compare one value against several possible cases.

Eg: Day of the week
   Suppose you want to print the day of the week based on a number.
*/

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    default:
        console.log("Invalid day");
}