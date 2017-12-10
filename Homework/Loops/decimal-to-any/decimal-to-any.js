const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let decimal = +gets();

const decimalToAny = (int, base) => {

    const digits = '0123456789ABCDEF';
    const remStack = [];
    do {
        remStack.push(decimal % base);
        decimal = Math.floor(decimal / base);
    }
    while (decimal > 0);

    const result = [];
    while (remStack.length > 0) {
        result.push(digits[remStack.pop()]);
    }
    return result.join('');
};

print(decimalToAny(decimal, 16));
