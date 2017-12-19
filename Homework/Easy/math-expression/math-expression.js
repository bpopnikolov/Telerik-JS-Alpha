const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


const x = +gets();
const y = +gets();
const z = +gets();

const calculateExpression = (n, m, p) => {

    // implement mod()
    const exp = (n * n + (1 / (m * p)) + 1337) / (n - (128.523123123 * p)) + Math.sin(mod(m, 180));

    return exp;
};

const mod = (a, b) => {
    return Math.floor(a % b);
};


const addStringNumbers = (a, b) => {
    if (+a === 0 && +b === 0) {
        return 0;
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0; i < Math.max(a, b); i++) {
        const sum = (a[i] || 0) + (b[i] || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = Math.floor((result[i] + sum) / 10);
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }
    return result;
};

print(calculateExpression(x, y, z).toFixed(6));
