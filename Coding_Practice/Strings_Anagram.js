const data = "listen\nsilent";   // replaces the readFileSync line
const lines = data.split('\n');
const s1 = (lines[0] || '');
const s2 = (lines[1] || '');

const a = s1.trim();
const b = s2.trim();

let isAnagram = true;

if (a.length !== b.length) {
    isAnagram = false;
} else {
    let count = {};

    for (let i = 0; i < a.length; i++) {
        let ch = a[i];
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let i = 0; i < b.length; i++) {
        let ch = b[i];

        if (count[ch] === undefined || count[ch] === 0) {
            isAnagram = false;
            break;
        }
        count[ch]--;
    }
}

console.log(isAnagram ? "YES" : "NO");