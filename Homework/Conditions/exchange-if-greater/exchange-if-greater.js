const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let a = +gets();
let b = +gets();

// ES6 variables swap
if (a > b) {
    [a, b] = [b, a];
}

print(a, b);

