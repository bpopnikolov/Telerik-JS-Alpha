const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const n = +gets();


const findTrailingZeroes = () => {
    let count = 0;

    for (let i = 5; n / i >= 1; i *= 5) {
        count += Math.floor(n / i);
    }
    return count;
};


print(findTrailingZeroes(n));
