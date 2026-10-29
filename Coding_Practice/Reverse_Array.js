//Print the elements of an array in reverse order.

const data = "3\n10 20 30";

const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

//O/P - "30, 20, 10"