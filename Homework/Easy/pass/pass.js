const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let [n, k] = gets().split(' ');

let pass = n.split('').reverse();
pass = pass.join('') | 0;

const reminder = pass % +k;
const quotient = Math.floor(pass / +k);

print(reminder + quotient);
