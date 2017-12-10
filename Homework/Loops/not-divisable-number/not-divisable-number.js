const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const result = [];

for (let i = 1; i <= n; i++) {
    if (i % 3 === 0) {
        continue;
    } else if (i % 7 === 0) {
        continue;
    }
    result.push(i);
}

print(result.join(' '));
