const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const input = gets();
let value = gets();

if (isNaN(value) || value === '') {
    print(value + '*');
} else {
    if (+value % 1 === 0) {
        print(+value + 1);
    } else {
        value = +value + 1;
        print(parseFloat(value).toFixed(2));
    }
}
