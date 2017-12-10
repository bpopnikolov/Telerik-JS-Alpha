const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = [];
let min = 0;
let max = 0;
let sum = 0;
let avg = 0;

for (let i = 0; i < n; i++) {
    numbers.push(+gets());
}

numbers.sort((a, b) => {
    return a - b;
});

min = numbers[0];
max = numbers[numbers.length - 1];
numbers.forEach((x) => {
    sum += x;
});
print(`min=${parseFloat(min).toFixed(2)}`);
print(`max=${parseFloat(max).toFixed(2)}`);
print(`sum=${parseFloat(sum).toFixed(2)}`);
print(`avg=${parseFloat(sum/n).toFixed(2)}`);

