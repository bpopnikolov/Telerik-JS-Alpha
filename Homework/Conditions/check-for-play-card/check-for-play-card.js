const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const stringToCheck = gets();
const cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];


// if (!isNaN(stringToCheck)) {
//     console.log('numbers');
//     stringToCheck = +stringToCheck;
// }

if (cards.includes(stringToCheck)) {
    print(`yes ${stringToCheck}`);
} else {
    print(`no ${stringToCheck}`);
}

