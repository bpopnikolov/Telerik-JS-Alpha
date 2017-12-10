const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
// const process = require('process');

// const hrTime = process.hrtime()

const n = +gets();
const numbers = [];
let maxCounter = 0;
let counter = 0;

for (let i = 0; i < n; i++) {
    numbers.push(+gets());
}

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i + 1] === numbers[i] ||
        (i === numbers.length - 1) &&
        numbers[i] === numbers[i - 1]) {
        counter += 1;
        if (maxCounter < counter) {
            maxCounter = counter;
        }
    } else {
        counter = 1;
    }
}

print(maxCounter);
