// Template literals (backticks) are the most flexible: they allow variables 
// inside ${} and multi-line text.

const name = "Jess";
const age = 25;
console.log(`${name} is ${age} years old`);  // Asha is 25 years old

const poem = `Line one
Line two`;

console.log ("----------------------------------------------");

// Basic properties and access
const st = "Hello";
st.length;     // 5
st[0];         // "H"
st.at(-1);     // "o" (last character)

//Command methods
const s = "  Hello, World  ";

s.trim();                  // "Hello, World"
s.toUpperCase();           // "  HELLO, WORLD  "
s.toLowerCase();           // "  hello, world  "
s.includes("World");       // true
s.startsWith("  He");      // true
s.endsWith("ld  ");        // true
s.indexOf("o");            // 6
s.slice(2, 7);             // "Hello"
s.replace("World", "JS");  // "  Hello, JS  "
s.replaceAll("l", "L");    // "  HeLLo, WorLd  "
"a,b,c".split(",");        // ["a", "b", "c"]
"ab".repeat(3);            // "ababab"
"5".padStart(3, "0");      // "005"

//Concatenation
"Hello" + " " + "World";   // "Hello World"
"Hello".concat(" World");  // "Hello World"

//Escape characters
"Line1\nLine2";       // new line
"Tab\tseparated";     // tab
'It\'s fine';         // escaped quote
"C:\\folder";         // backslash

//Comparing strings
"a" === "a";   // true (compares by value)
"a" < "b";     // true (alphabetical by character code)

//Immutability example
let s1 = "hello";
s1[0] = "H";            // does nothing
console.log(s1);        // "hello"

s = "H" + s.slice(1);  // creates a new string
console.log(s);        // "Hello"

//Converting
String(123);        // "123"
(123).toString();   // "123"
Number("42");       // 42

// Looping over characters
for (const ch of "hey") {
  console.log(ch);  // h, e, y
}