const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const hex = gets().toString();


const hexToDecimal = (hexa) => {

    const digits = '0123456789ABCDEF';
    let decimal = 0;
    const base = 16;

    for (let i = hexa.length - 1; i >= 0; i--) {
        decimal += digits.indexOf(hexa[i]) * (base ** (hexa.length - 1 - i));
    }
    print(decimal);
};

hexToDecimal(hex);
