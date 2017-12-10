const gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const x = +gets();

const catalan = (n) => {
    let result = 0;
    if (n === 0) {
        return 1;
    }

    result = (4 * n - 2) * catalan(n - 1) / (n + 1);

    return result;
};

print(catalan(x));
