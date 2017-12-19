const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numbers = gets().split('').map((x) => +x);

let sum = 1;
let toAdd = numbers.indexOf(1) === 0 ? 1 : 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0 || numbers[i - 1] === 0) {
        sum += numbers[i];
        continue;
    }
    if ((numbers.lastIndexOf(1)) === i &&
         numbers.lastIndexOf(1) === numbers.length - 1) {
        toAdd++;
    }
    if (sum === 0) {
        sum += numbers[i];
    } else {
        sum *= numbers[i];
    }
}
print(sum + toAdd);
