const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


const n = +gets();
const numbers = [];
const counter = {};
let mostFreqNumber = 0;
let numberFreq = 0;

for (let i = 0; i < n; i++) {
    numbers.push(+gets());
}

numbers.forEach((number, index, arr) => {
    if (!counter[number]) {
        counter[number] = 0;
    }
    counter[number] += 1;
});

// console.log(numbers);
// console.log(counter);

for (const prop in counter) {
    if (counter[prop] > numberFreq) {
        numberFreq = counter[prop];
        mostFreqNumber = prop;
    }
}

print(mostFreqNumber + ` (${numberFreq} times)`);
