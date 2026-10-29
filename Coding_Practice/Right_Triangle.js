// Print a right triangle pattern using stars. For input n, print n rows where row i has i stars.

const data = "4";   // declare value
const n = parseInt(data.trim(), 10);

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}