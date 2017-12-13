const Stack = require('./stack/stack');

const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const stack = new Stack();

const exp = gets();

for (let i = 0; i < exp.length; i++) {
    if (exp[i] === '(') {
        stack.push(i);
    }
    if (exp[i] === ')') {
        print(exp.slice(stack.pop(), i + 1));
    }
}
