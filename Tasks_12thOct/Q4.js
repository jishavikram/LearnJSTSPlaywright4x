let i = 1; 

let r = i++ > 1 ? i++ : ++i; 
console.log(r, i);
//O/P = 3 3

//i++ = 1 (after execution 2) 
//i++ =  1 (after execution 2)
//++i =  3 (after execution 3)

// 1 >1  -> false
// i++  =  1 -> 2 (after execution)
//++i = 3 (after execution)

// so 1 > 1:3:3

