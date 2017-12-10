const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
// const process = require('process');

// const hrTime = process.hrtime()

const n = +gets();
const arr = Array.from({ length: n });

// using for loop
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = i * n;
// }

// using Array.filter();
arr.filter((ele, index, array) => {
    array[index] = index * 5;
});

arr.forEach((ele) => {
    print(ele);
});
// logs the execution time in seconds;
// console.log((hrTime[0] + (hrTime[1] / 1e9)).toFixed(3));