const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numbers = [+gets(), +gets(), +gets()];

let plusCounter = 0;
let minusCounter = 0;
let hasZero = false;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
        minusCounter++;
    }
    if (numbers[i] > 0) {
        plusCounter++;
    }
    if (numbers[i] === 0) {
        hasZero = true;
    }
}

if (hasZero) {
    print(0);
} else {
    if (minusCounter % 2 === 0) {
        print('+');
    } else {
        print('-');
    }
}
