const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const b = gets();
const n = +gets();

const countBinaryDigits = (number, search) => {
    const binary = number.toString(2);
    let counter = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === search) {
            counter++;
        }
    }
    return counter;
};

const result = [];

for (let i = 0; i < n; i++) {
    const x = +gets();
    result.push(countBinaryDigits(x, b));
}

result.forEach((x) => {
    print(x);
});
