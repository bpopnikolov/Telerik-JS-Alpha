const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const binary = gets().split('').map((x) => +x);
const q = binary.length -1;
let decimal = 0;

for (let i = 0; i < binary.length; i++) {

    if (binary[i] === 1) {
        decimal += 2 ** (q - i);
    }
}

print(decimal);


