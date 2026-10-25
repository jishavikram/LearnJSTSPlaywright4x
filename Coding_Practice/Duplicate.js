// Find and print all duplicate elements in an array.

const data = "6 1 2 3 2 4 1 5";   
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let count = {};
let found = false;

for (let i = 0; i < n; i++) {
    let num = arr[i];

    if (count[num] === undefined) {
        count[num] = 1;                 // first time we see this number
    } else {
        count[num]++;                   // seen before, so it is a duplicate

        if (count[num] === 2) {         // print only the first time it repeats
            console.log(num);
            found = true;
        }
    }
}

if (found === false) {
    console.log("No duplicates found");
}
