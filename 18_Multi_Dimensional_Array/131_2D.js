/*  // 1D array: a single list
const marks = [80, 90, 70];

// 2D array: a list of lists (rows and columns)
const matrix = [
  [1, 2, 3],   // row 0
  [4, 5, 6],   // row 1
  [7, 8, 9]    // row 2
*/


let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for(let i=0;i< testMatrix.length;i++){
    for(let j=0;j< testMatrix[i].length;j++){
        process.stdout.write(testMatrix[i][j]+" ");
    }
    console.log("");
}

console.log(" --------- ");