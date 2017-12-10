const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = gets().split(' ').map((x) => +x);
let counter = 0;
// print(numbers);

for (let i = 1; i < numbers.length - 1; i++) {

    if (numbers[i - 1] < numbers[i] && numbers[i + 1] < numbers[i]) {
        counter++;
    }
}

print(counter);
