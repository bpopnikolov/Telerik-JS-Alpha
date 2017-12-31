const Stack = require('../stack/stack');

const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const exp = gets();


// const stack = new Stack();
// for (let i = 0; i < exp.length; i++) {
//     if (exp[i] === '(') {
//         stack.push(i);
//     }
//     if (exp[i] === ')') {
//         print(exp.slice(stack.pop(), i + 1));
//     }
// }


// recursive solution
const bracketsExpressions = (index) => {
    if (index >= exp.length) {
        return 0;
    }

    if (exp[index] === '(') {
        const result = bracketsExpressions(index + 1);
        if (result !== 0) {
            print(exp.substring(index, result + 1));
        }
        return bracketsExpressions(result + 1);
    }

    if (exp[index] === ')') {
        return index;
    }

    return bracketsExpressions(index + 1);
};

bracketsExpressions(0);
