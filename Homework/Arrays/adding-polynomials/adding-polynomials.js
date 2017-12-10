const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();

const first = gets().split(' ').map((x) => +x);
const second = gets().split(' ').map((x) => +x);
const result = [];

for (let i = 0; i < n; i++) {
    result.push(first[i] + second[i]);
}

print(result.join(' '));
