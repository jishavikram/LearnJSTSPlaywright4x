// Write a program to check if a given string is a palindrome (reads the same forwards and backwards).

const data = "racecar";
const str = data.trim();

let isPalindrome = true;

for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

console.log(isPalindrome ? "YES" : "NO");