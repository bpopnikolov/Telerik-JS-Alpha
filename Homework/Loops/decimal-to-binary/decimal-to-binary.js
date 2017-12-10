const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let decimal = +gets();
const binary = [];

do {
    binary.push(decimal % 2);
    // basically /= 2 without remainder if any
    decimal >>= 1;
}
while (decimal > 0);


print(binary.reverse().join(''));

// print((decimal).toString(2));
