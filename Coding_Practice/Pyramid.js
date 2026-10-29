// Print a pyramid pattern using stars. 
// For input n, print n rows where row i has (n-i) leading spaces and (2*i-1) stars.*/

const data = "4";   // declare value
const n = parseInt(data.trim(), 10);

for (let i = 1; i <= n; i++) {
    let row = "";

    // leading spaces: n - i
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // stars: 2 * i - 1
    for (let j = 1; j <= 2 * i - 1; j++) {
        row += "*";
    }

    console.log(row);
}