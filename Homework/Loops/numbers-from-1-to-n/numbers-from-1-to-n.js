const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const numbers = [];

for (let i = 1; i <= n; i++) {
    numbers.push(i);
}

print(numbers.join(' '));

