const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numbers = [gets(), gets(), gets()];
const n = +gets();

const add = (a, b) => {
    if ((+a) === 0 && (+b) === 0) {
        return '0';
    }

    a = a.split('').reverse();
    b = b.split('').reverse();
    const result = [];

    for (let i = 0;
        (a[i] >= 0) || (b[i] >= 0); i++) {
        const sum = (parseInt(a[i]) || 0) + (parseInt(b[i]) || 0);

        if (!result[i]) {
            result[i] = 0;
        }

        const next = ((result[i] + sum) / 10) | 0;
        result[i] = (result[i] + sum) % 10;

        if (next) {
            result[i + 1] = next;
        }
    }

    return result.reverse().join('');
};

const triboResult = [];
const tribonacci = (num) => {
    triboResult[0] = numbers[0];
    triboResult[1] = numbers[1];
    triboResult[2] = numbers[2];
    for (let i = 3; i < n; i++) {
        triboResult[i] = add(add(triboResult[i - 1], triboResult[i - 2]), triboResult[i - 3]);
    }
};

tribonacci(n);
print(triboResult[triboResult.length - 1]);
