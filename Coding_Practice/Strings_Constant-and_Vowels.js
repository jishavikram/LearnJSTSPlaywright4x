//Write a program to count the number of vowels and consonants in a given string.

const data = "Hello World";
const str = data.trim();

let vowels = 0;
let consonants = 0;

for (let i=0; i<str.length; i++) {
    let ch = str[i].toLowerCase();

    if(ch >='a' && ch<='z') {
        if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u') {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);
