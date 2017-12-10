const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = gets().split('');

const reverseDecimal = (number) => {
    return number.reverse().join('');
};


print(reverseDecimal(n));
