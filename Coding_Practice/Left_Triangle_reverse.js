//Print a left-aligned triangle pattern. For input n, print n rows in reverse order.

const data = "4";   
const n = parseInt(data.trim(), 10)

for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += "*";
    }

    console.log(row);
}