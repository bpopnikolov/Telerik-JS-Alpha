const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map((x) => +x);


const number1 = gets().split(' ').map((x) => +x);
const number2 = gets().split(' ').map((x) => +x);


const addStringNumbers = (a, b) => {
    if (a === 0 && b === 0) {
        return 0;
    }

    const result = [];
    for (let i = 0; i < Math.max(n, m); i++) {
        const sum = (a[i] || 0) + (b[i] || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = (result[i] + sum) / 10 | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }
    return result;
};

print(addStringNumbers(number1, number2).join(' '));
