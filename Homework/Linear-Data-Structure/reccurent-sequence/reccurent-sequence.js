const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);

const result = [];
const numbers = [];
numbers.push(n);

for (let i = 0; i < 20; i++) {
    const s = numbers.shift();

    result.push(s);

    numbers.push(s + 1);
    numbers.push((2 * s) + 1);
    numbers.push(s + 2);
}

print(result);
