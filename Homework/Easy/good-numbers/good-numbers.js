const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);
let result = 0;
for (let i = n; i <= m; i++) {
    let currentNumber = i;
    let counter = 0;
    const length = Math.log(i) * Math.LOG10E + 1 | 0;

    while (currentNumber > 0) {
        if (i % (currentNumber % 10) === 0 || (currentNumber % 10) === 0) {
            counter += 1;
            currentNumber = Math.floor(currentNumber / 10);
        } else {
            break;
        }
    }
    if (counter === length) {
        result++;
        // console.log(i, result);
    }
}

print(result);
