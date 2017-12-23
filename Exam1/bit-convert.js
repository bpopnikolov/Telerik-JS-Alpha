const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const numbers = gets().split(',').map((x) => ('00000000' + (+x).toString(2)).substr(-8).split(''));

let result = [];
for (let i = 0; i < numbers.length; i++) {
    let j = 0;
    if (i % 2 === 0) {
        j = 1;
    }
    result.push(numbers[i][j]);
    j += 2;
    result.push(numbers[i][j]);
    j += 2;
    result.push(numbers[i][j]);
    j += 2;
    result.push(numbers[i][j]);
    j += 2;
}
print(result.join(''));
