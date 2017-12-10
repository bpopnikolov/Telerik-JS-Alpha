const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const a = +gets();
const b = +gets();
const c = +gets();
let biggest = 0;

if (a > b && a > c) {
    biggest = a;
} else if (b > a && b > c) {
    biggest = b;
} else {
    biggest = c;
}

print(biggest);


