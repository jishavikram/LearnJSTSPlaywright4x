/*  ---------------  Comparison Operator ------------

 == -> losse comparsion  --> Lose check we will check either value or data type.
 === -> strict comparsion --> Strict check we will check for both the datatype and value
*/

//Ex:  
pizza == pizza // ( type)
domin === pizzahut // (type and content)

//== compares values after possible type conversion.
// === compares values without converting their types.

console.log(5 == "5");  // true
console.log(5 === "5"); // false

