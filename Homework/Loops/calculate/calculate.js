const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const x = +gets();
let sum = 0;

// function fact(n) {
//     return n<2 ? 1: n*fact(n-1);
// }

const fact = (y) => {
    if (y < 2) {
        return 1;
    }
    return y * fact(y - 1);
};

for (let i = 0; i <= n; i++) {
    sum += (fact(i)) / (x ** i);
}

print(sum.toFixed(5));
