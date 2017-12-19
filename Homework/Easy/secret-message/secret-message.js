const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const secret = gets().replace(/\d+/g, '').split('').reverse().join('');

print(secret);
