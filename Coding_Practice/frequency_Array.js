// Find and print the frequency of each element in an array.

const data = "5 1 2 1 3 2";   
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let frequency = {};

for (let i = 0; i < n; i++) {
    let num = arr[i];

    if (frequency[num] === undefined) {
        frequency[num] = 1;
    } else {
        frequency[num]++;
    }
}

for (let num in frequency) {
    console.log(num + " appears " + frequency[num] + " times");
}