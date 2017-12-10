const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n =+gets();
const numbers = gets().split(' ').map((x) => +x);

let evenProd = 1;
let oddProd = 1;

for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
        evenProd *= numbers[i];
    } else {
        oddProd *= numbers[i];
    }
}

if (evenProd === oddProd) {
    print(`yes ${oddProd}`);
} else {
    print(`no ${evenProd} ${oddProd}`);
}
