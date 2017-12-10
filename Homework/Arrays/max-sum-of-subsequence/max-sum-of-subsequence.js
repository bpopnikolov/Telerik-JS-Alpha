const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = Array.from({
    length: n,
}, (x) => +gets());
let maxSum = 0;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    maxSum = Math.max(sum, maxSum);
    if (sum < 0) {
        sum = 0;
    }
}

print(maxSum);

