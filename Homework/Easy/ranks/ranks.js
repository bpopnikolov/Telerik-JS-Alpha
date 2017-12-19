const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = gets();
const numbers = gets().split(' ');
const sorted = numbers.slice().sort((a, b) => b - a);

const result = [];
for (let i = 0; i < numbers.length; i++) {
    result.push(sorted.indexOf(numbers[i]) + 1);
}

print(result.join(' '));
