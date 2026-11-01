//Write a program to remove duplicate characters from a string.

const data = "programming";
const str = data.trim();

let result = ""

for (let i = 0; i<str.length; i++) {
    if (!result.includes(str[i])) {
        result += str[i];
    } 

}

console.log(result);