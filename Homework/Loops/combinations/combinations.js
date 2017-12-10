const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();
const k = +gets();
let result = 0;

const cFact = (x) => {
    if (x === k) {
        return 1;
    }

    return x * cFact(x - 1);
};

const fact = (x) => {
    if (x < 2) {
        return 1;
    }
    return x * fact(x - 1);
};

result = cFact(n) / fact(n - k);
print(Math.round(result));
