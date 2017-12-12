const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const start = +gets();
let operation = '';

// const pathToOne = (start) => {
//     let x = start;
//     let y = start;
//     let z = start;

//     if (start <= 1) return 0;

//     if (start % 2 === 0) {
//         x = pathToOne(start / 2);
//     }


//     if (start % 3 === 0) {
//         y = pathToOne(start / 3);
//     }


//     z = pathToOne(start - 1);

//     return 1+ (min(x, y, z));
// };

// const min = (a, b, c) => {
//     let smallest = 0;

//     if (a < b && a < c) {
//         smallest = a;
//     } else if (b < a && b < c) {
//         smallest = b;
//     } else {
//         smallest = c;
//     }
//     return smallest;
// };

// const isPowerOfTwo = (x) => {
//     return x && (!(x & (x - 1)));
// };

// print(pathToOne(n));

const stepCount = (n) => {
    let count = 0;
    while (n > 1) {
        if (n % 2 === 0) {
            // bitmask: *0
            n = Math.floor(n / 2);
        } else if (n === 3 || n % 4 === 1) {
            // bitmask: 01
            n = n - 1;
        } else {
            // bitmask: 11
            n = n + 1;
        }
        count += 1;
    }
    return count;
};

print(stepCount(start));
