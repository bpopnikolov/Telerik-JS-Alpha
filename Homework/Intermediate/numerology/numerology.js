const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const input = gets().split('').map((x) => +x);
const results = Array(10).fill(0);
const calculate = (arr, calculations) => {

    if (arr.length < 2) {
        calculations[arr[0]]++;
        return;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        const a = arr[i];
        const b = arr[i + 1];

        arr[i + 1] = someDeepShit(a, b);
        arr.splice(i, 1);
        calculate(arr, calculations);
        arr.splice(i, 0, a);
        arr[i + 1] = b;
    }
};

const someDeepShit = (a, b) => {
    return ((a + b) * (a ^ b)) % 10;
};

calculate(input, results);
print(results.join(' '));
